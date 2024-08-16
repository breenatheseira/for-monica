const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error(err.message)
  }
}

export default copyToClipboard;