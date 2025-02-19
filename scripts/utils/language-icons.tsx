import { IconType } from 'react-icons/lib'
import {
    SiC,
    SiCplusplus,
    SiCsharp,
    SiCss3,
    SiDocker,
    SiGnubash,
    SiHtml5,
    SiJavascript,
    SiJson,
    SiMarkdown,
    SiMdx,
    SiNginx,
    SiPython,
    SiRust,
    SiTypescript,
    SiYaml,
} from 'react-icons/si'

export const languageIcons: { [key: string]: IconType } = {
    html: SiHtml5,
    css: SiCss3,
    javascript: SiJavascript,
    python: SiPython,
    c: SiC,
    'c++': SiCplusplus,
    cs: SiCsharp,
    typescript: SiTypescript,
    markdown: SiMarkdown,
    mdx: SiMdx,
    json: SiJson,
    yaml: SiYaml,
    rust: SiRust,
    text: SiMarkdown,
    dockerfile: SiDocker,
    nginx: SiNginx,
    bash: SiGnubash,
}

export const getLanguageIcon = (language: string): JSX.Element | null => {
    const Icon = languageIcons[language]
    return Icon ? <Icon /> : null
}
