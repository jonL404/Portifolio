// Preencha seus endereços públicos. Campos vazios nunca geram links fictícios.
export const profile = {
    githubUsername: '',
    linkedinUrl: '',
    email: '',
    githubApiEnabled: false,
};
export const githubUrl = profile.githubUsername ? `https://github.com/${profile.githubUsername}` : '';
