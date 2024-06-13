export function getErrors(error, request, response, next) {
  console.log('OPA erro');
  if (error instanceof Error) {
    return response.status(400).json({ error: error.message });
  }

  return response.status(500).json({ status: 'error', message: "Internal Server Error" });
}


