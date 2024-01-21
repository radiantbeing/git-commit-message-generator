const postGenerating = async ({
  url,
  model,
  prompt,
}: {
  url: string;
  model: string;
  prompt: string;
}) => {
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      model,
      prompt,
      stream: false,
    }),
  });
  return res.json();
};

export { postGenerating };
