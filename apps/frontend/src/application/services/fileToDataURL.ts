/**
 * @function fileToDataURL
 * @description To allow file upload to be used in forms the following would be needed to
 * add to the form:
 *
 * ```
 *  const parts: Array<
 *       { type: 'text'; text: string } | { type: 'file'; mediaType: string; url: string }
 *     > = [
 *       {
 *         type: 'text',
 *         text: input,
 *       },
 *     ]
 *
 *     if (selectedFile) {
 *       parts.push({
 *         type: 'file',
 *         mediaType: selectedFile.type,
 *         url: await fileToDataURL(selectedFile),
 *       })
 *     }
 *
 *     console.dir(parts)
 *
 *     sendMessage({ parts
 *```
 * Plus the necessary UI to select the file.
 * and
 * ```
 * const [selectedFile, setSelectedFile] = useState<File | null>(null)
 * ```
 *
 * @param file
 */

const fileToDataURL = (file: File) => {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

export { fileToDataURL }
