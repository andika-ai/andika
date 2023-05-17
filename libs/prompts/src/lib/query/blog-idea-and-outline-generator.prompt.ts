export const promptBlogIdeaAndOutline  = (payload: any) => {

        const prompt =`Generate a blog idea and outline based on the primary keyword of ${payload.keyword},
        in the language of ${payload.language}, with a tone that is ${payload.tone}.
        Make sure to include a clear and compelling topic, with well-defined subtopics that support the main idea.
        Also, pay attention to the structure, ensuring that the blog post has an introduction, body, and conclusion.
        Use descriptive language and imagery to bring the blog idea to life. 
        Ensure that the blog aligns with the primary keyword and the chosen tone, and that it evokes the desired emotions in the audience.
        Return the blog idea in HTML format.
        `
        return prompt;
}