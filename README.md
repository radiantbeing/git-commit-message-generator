# Git Commit Message Generator

> The Git Commit Message Generator alleviates the cumbersome task of contemplating commit messages for every commit. Quickly complete your commit messages with ease!

[Demo](https://git-commit-message-generator.vercel.app/)

## Prerequisites

- The Git Commit Message Generator operates in conjunction with [Ollama](https://ollama.ai/).
- It requires the [`mistral`](https://ollama.ai/library/mistral) model, which is compatible with Ollama. If you don't have this model, run the following command:

  ```shell
  ollama run mistral
  ```

## Attention

If you encounter an `ERR_NETWORK: Network Error` error when generating a Git commit message, consider the following possibilities:

1. **Incorrect URL**: Verify that the URL for the running Ollama server is correct.
2. **Inactive Ollama daemon**: Ensure that Ollama is running on the server.
3. **CORS Error**: Check if Ollama has added additional web origins. Refer to this [document](https://github.com/jmorganca/ollama/blob/main/docs/faq.md#how-can-i-allow-additional-web-origins-to-access-ollama) for more information.
