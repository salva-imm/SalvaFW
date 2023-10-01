import { contact, IUser } from './github'

export default class ME implements IUser {
    public static firstName = 'Salva'
    public static lastName = 'Imm'
    public static username = 'salva-imm'
    public static aliases = ['Demon lord']
    public static skills = ['Python', 'JavaScript', 'NodeJS', 'Rust', 'SQL', 'Postgres', 'Django', 'FastAPI']
    public static info = {
        age: 0,
        country: 'Iran',
        org: 'None',
        likes: ['TypeScript', 'Zelda Series', 'JJBA Series', 'Well.....'],
        hobbies: ['Movie', 'Series', 'Anime', 'Music'],
        reach: [
            {
                name: contact.Discord,
                username: '......'
            },
            {
                name: contact.WhatsApp,
                url: '......'
            }
        ]
    }
    public static projects = [
        {
            name: 'Wa-Sticker-Fomatter',
            homepage: 'https://www.npmjs.com/package/wa-sticker-formatter',
            repo: 'https://github.com/AlenSaito1/wa-sticker-formatter',
            language: 'TypeScript',
            ongoing: true
        },
        {
            name: 'mywaifulist-scraper',
            homepage: 'https://www.npmjs.com/package/mywaifulist-scraper',
            repo: 'https://github.com/AlenSaito1/mywaifulist-scraper',
            language: 'TypeScript',
            onging: true
        },
        {
            name: 'WhatsApp-Botto-Xre',
            homepage: 'https://github.com/SomnathDas/Whatsapp-Botto-Xre#readme',
            repo: 'https://github.com/SomnathDas/Whatsapp-Botto-Xre',
            language: 'TypeScript',
            onging: true
        }
    ]
}
