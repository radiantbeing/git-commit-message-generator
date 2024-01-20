import { ChangeEvent, FormEvent, useState } from "react";

export default function useGenerator() {
  const [inputs, setInputs] = useState({
    apiUrl: "http://localhost:11434",
    language: "",
    beforeCode: "",
    afterCode: "",
  });
  const [isGenerating, setGenerating] = useState(false);
  const [generatedResponse, setGeneratedResponse] = useState("");

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const camelize = (str: string) =>
      str.replace(/-./g, (subStr) => subStr[1].toUpperCase());

    const { id, value } = e.target;

    setInputs({ ...inputs, [camelize(id)]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const model = "mistral";
    const prompt = `You are a machine which return a Git commit message. You use ${inputs.language} as the programming language. I'll provide you with the code before and after the changes, so please give me the best commit message.
    
    Before the changes:
    ${inputs.beforeCode}

    After the changes:
    ${inputs.afterCode}
    
    Your response should only have a commit message.`;

    try {
      setGenerating(true);

      const res = await fetch(`${inputs.apiUrl}/api/generate`, {
        method: "POST",
        body: JSON.stringify({
          model,
          prompt,
          stream: false,
        }),
      });
      const data = await res.json();

      setGeneratedResponse(data.response);
    } catch (error) {
      setGeneratedResponse("Error occurred!");
      throw error;
    } finally {
      setGenerating(false);
    }
  };

  return {
    inputs,
    isGenerating,
    generatedResponse,
    handleInputChange,
    handleSubmit,
  };
}
