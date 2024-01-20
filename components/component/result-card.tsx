import { CardTitle, CardHeader, CardContent, Card } from "~/components/ui/card";

const DEFAULT_RESPONSE = "Your generated commit message will appear here...";

export default function ResultCard({
  generatedResponse,
}: {
  generatedResponse: string;
}) {
  return (
    <Card className="w-full max-w-2xl mx-auto mt-8">
      <CardHeader>
        <CardTitle className="text-2xl">Generated Commit Message</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="p-4 bg-gray-100 rounded-md dark:bg-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400 font-mono whitespace-pre-wrap">
            {generatedResponse || DEFAULT_RESPONSE}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
