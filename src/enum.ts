export enum ButtonType {
    primary = 'primary',
    kakao = 'kakao',
    google = 'google'
}

export enum InputType {
    text = 'text',
    password = 'password',
}

export enum ProjectType {
    사이드_프로젝트 = '사이드 프로젝트',
    지식_공유_및_탐구 = '지식 공유 및 탐구'
}

export enum ProcessType {
    오프라인 = '오프라인',
    온라인 = '온라인',
    온_오프라인 = '온/오프라인'
}

export enum RecruitingType {
    모집중 = '모집중',
    모집_완료 = '모집 완료'
}

export type BadgeType = ProjectType | ProcessType | RecruitingType;