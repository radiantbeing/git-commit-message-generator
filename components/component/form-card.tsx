import { ChangeEvent, FormEvent } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "~/components/ui/card";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Button } from "~/components/ui/button";

export default function FormCard({
  apiUrl,
  language,
  beforeCode,
  afterCode,
  isGenerating,
  handleInputChange,
  handleSubmit,
}: {
  apiUrl: string;
  language: string;
  beforeCode: string;
  afterCode: string;
  isGenerating: boolean;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Git Commit Message Generator</CardTitle>
        <CardDescription>
          Provide the programming language, code before change, and code after
          change to generate a git commit message.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="api-url">Ollama API URL</Label>
            <Input
              id="api-url"
              placeholder="Enter the Ollama API URL"
              value={apiUrl}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="language">Programming Language</Label>
            <Input
              id="language"
              placeholder="Enter the programming language"
              value={language}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="before-code">Code Before Change</Label>
            <Textarea
              className="min-h-[100px]"
              id="before-code"
              placeholder="Enter the code before change"
              value={beforeCode}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="after-code">Code After Change</Label>
            <Textarea
              className="min-h-[100px]"
              id="after-code"
              placeholder="Enter the code after change"
              value={afterCode}
              onChange={handleInputChange}
              required
            />
          </div>
          <Button className="w-full" type="submit" disabled={isGenerating}>
            {isGenerating && (
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            )}
            Generate Commit Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
