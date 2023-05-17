
export const generateBrandName = (req: any) => {
    const { description, tone, language  } = req;
    const prompt =`Please generate a single brand name in ${language} that aligns with the following description ${description}.
                        The brand names should be suitable for the description provided.
                        In terms of tone, the brand name should be in a ${tone} tone.
                        Please make sure that the brand name is unique and not already in use by another company.
                        Additionally, please provide a brief explanation for each brand name, describing how it aligns with the desscription ${description}.
                        Please make sure that the brand name should be easy to pronounce and spell and it should be easy to remember and easy to be registered as a domain name.`
    return prompt;
}