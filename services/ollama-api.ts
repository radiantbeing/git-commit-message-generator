import axios, { AxiosPromise } from "axios";

interface PostGeneratingRequest {
  url: string;
  model: string;
  prompt: string;
}

interface PostGeneratingResponse {
  model: string;
  created_at: string;
  response: string;
  done: boolean;
  context: number[];
  total_duration: number;
  load_duration: number;
  prompt_eval_duration: number;
  eval_count: number;
  eval_duration: number;
}

const postGenerating = ({
  url,
  model,
  prompt,
}: PostGeneratingRequest): AxiosPromise<PostGeneratingResponse> =>
  axios.post(url, {
    model,
    prompt,
    stream: false,
  });

export { postGenerating };
