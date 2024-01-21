import { ChangeEvent, FormEvent, useState } from "react";
import { postGenerating } from "~/services/ollama-api";
import { camelize } from "~/utils/namer";

export default function useGenerator() {
  const [inputs, setInputs] = useState({
    apiUrl: "http://localhost:11434",
    language: "",
    beforeCode: "",
    afterCode: "",
  });
  const [isGenerating, setGenerating] = useState(false);
  const [generatedResponse, setGeneratedResponse] = useState("");

  const model = "mistral";
  const prompt = `You are a machine which return a Git commit message. You use ${inputs.language} as the programming language. I'll provide you with the code before and after the changes, so please give me the best commit message.
    
    Before the changes:
    ${inputs.beforeCode}

    After the changes:
    ${inputs.afterCode}
    
    Your response should only have a commit message.`;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setGenerating(true);
      const { response } = await postGenerating({
        url: `${inputs.apiUrl}/api/generate`,
        model,
        prompt,
      });
      setGeneratedResponse(response);
    } catch (error) {
      console.log({ error });
      setGeneratedResponse("Error occurred!");
      throw error;
    } finally {
      setGenerating(false);
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;

    setInputs({ ...inputs, [camelize(id)]: value });
  };

  return {
    inputs,
    isGenerating,
    generatedResponse,
    handleInputChange,
    handleSubmit,
  };
}
