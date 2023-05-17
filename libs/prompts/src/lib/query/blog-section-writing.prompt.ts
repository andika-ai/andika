


export const generateBlogSection = (req: any) => {
    const { text, tone, language  } = req;
    const prompt =`Please write a blog section for the given topic in ${text}.
                    The blog should be in ${language} language.
                    The tone of the blog section should be ${tone}.
                    The blog section should be relevant to the topic.
                    Return the blog idea in HTML format, with the following styles applied:\n
                        - Headings
                        - Paragraphs
                        - Text styling
                    `
    return prompt
}