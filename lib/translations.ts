export type Lang = "en" | "ja";

export const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      role: "Fullstack Engineer",
      headline: "Building Digital Experiences",
      tagline: "Transforming ideas into elegant, functional solutions",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
    },
    about: {
      label: "About",
      title: "Aiming for Excellence as a Versatile Full-Stack Engineer",
      p1: "I graduated from Tomakomai Kosen (Department of Electrical and Electronic Engineering) and have since worked as a Full-Stack Engineer across multiple companies. My expertise revolves around Python (FastAPI, Django) and JavaScript (React, Next.js), building internal business systems, AI applications, and 3D simulation environments.",
      p2: "I handle the entire development lifecycle—from requirements definition to design, implementation, and testing. With a strong foundation in AWS cloud infrastructure and Docker-based development environments, I deliver robust, scalable solutions effectively.",
      resume: "Resume (Japanese)",
      jobHistory: "Job History (Japanese)",
      resumeEn: "Resume (English)",
      emailMe: "Email Me",
    },
    skills: {
      label: "Skills & Technologies",
      title: "My Technical Toolkit",
      description: "I have worked with a variety of technologies across the full stack.",
    },
    projects: {
      label: "Featured Projects",
      title: "Recent Work",
      description: "Here are some of the projects I've worked on recently",
      viewMore: "View More on GitHub",
      items: [
        {
          title: "AI Security Test System",
          description: "AI-driven security knowledge assessment system with personalized learning paths.",
        },
        {
          title: "Customer Persona Gen AI",
          description: "Marketing support system generating customer personas from data using Generative AI.",
        },
        {
          title: "Robot Simulation Env",
          description: "3D simulation environment for industrial robots using NVIDIA Isaac Sim & ROS2.",
        },
        {
          title: "Golf Reservation Chatbot",
          description: "AI chatbot for automated golf reservations replacing call center operations.",
        },
        {
          title: "Payroll & Attendance",
          description: "Unified web system for managing employee attendance and payroll calculations.",
        },
        {
          title: "AI Meeting Summary",
          description: "Automated meeting summarization and translation tool for internal efficiency.",
        },
      ],
    },
    experience: {
      label: "Career Journey",
      title: "Work Experience",
      description: "An overview of my professional background and career milestones.",
      items: [
        {
          role: "Full Stack Engineer",
          company: "Akatsuki AI Technologies",
          period: "Nov 2025 – Present",
          location: "Tokyo, Japan",
          achievements: [
            "Developed a marketing support system that generates customer personas from purchasing data using AI.",
            "Designed and implemented Generative AI chat features with a focus on UI/UX.",
            "Implemented strict access control and permission management for handling sensitive client data.",
          ],
        },
        {
          role: "Full Stack Engineer (Frontend Lead)",
          company: "CAL Co., Ltd.",
          period: "Mar 2025 – Nov 2025",
          location: "Tokyo, Japan",
          achievements: [
            "Leading frontend development for an AI-based security knowledge assessment system for NEC.",
            "Implemented AWS Cognito for authentication and managed deployments using AWS Amplify & Lambda.",
            "Established Git approval flows and code review processes to ensure high code quality.",
          ],
        },
        {
          role: "Full Stack Engineer / Team Lead",
          company: "Mirai Technologies LLC",
          period: "May 2024 – Mar 2025",
          location: "Ulaanbaatar, Mongolia",
          achievements: [
            "Led a 4-person team in building a 3D robot simulation environment using NVIDIA Isaac Sim & ROS2.",
            "Developed a web-based Attendance & Payroll system using Next.js and MongoDB, automating complex calculations.",
            "Managed project requirements, design, and team task allocation.",
          ],
        },
        {
          role: "Web Developer",
          company: "Dentsu Data Artist Mongol",
          period: "Apr 2023 – May 2024",
          location: "Ulaanbaatar, Mongolia",
          achievements: [
            "Developed an AI Chatbot for Golf Reservations using React, Django, and OpenAI API, replacing manual call center tasks.",
            "Built an internal AI Meeting Summary tool with Python/FastAPI and AWS, supporting multi-language translation.",
            "Handled full-cycle development from infrastructure (Docker/AWS) to frontend and backend implementation.",
          ],
        },
      ],
    },
    contact: {
      label: "Get in Touch",
      title: "Let's Work Together",
      description:
        "I welcome inquiries regarding potential job opportunities, collaborations, or projects where my skills and experience may be a strong fit.",
    },
    footer: {
      rights: "© 2025 CodyPortfolio. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
  },
  ja: {
    nav: {
      about: "自己紹介",
      skills: "スキル",
      projects: "プロジェクト",
      experience: "職務経歴",
      contact: "お問い合わせ",
    },
    hero: {
      role: "フルスタックエンジニア",
      headline: "デジタル体験を創る",
      tagline: "アイデアをエレガントで実用的なソリューションへ",
      viewProjects: "プロジェクトを見る",
      contactMe: "お問い合わせ",
    },
    about: {
      label: "自己紹介",
      title: "多様なスキルを持つフルスタックエンジニアとして",
      p1: "苫小牧工業高等専門学校（電気電子工学科）を卒業後、複数の企業でフルスタックエンジニアとして従事。Python（FastAPI・Django）とJavaScript（React・Next.js）を中心に、社内業務システムやAIアプリケーション、3Dシミュレーション環境の構築に携わってきました。",
      p2: "要件定義・設計・実装・テストまで開発の全工程を担当。AWSクラウドインフラやDockerを活用した開発環境の構築にも精通しており、堅牢でスケーラブルなソリューションを提供します。",
      resume: "履歴書",
      jobHistory: "職務経歴書",
      resumeEn: "英文履歴書",
      emailMe: "メールを送る",
    },
    skills: {
      label: "スキル・技術",
      title: "技術スタック",
      description: "フルスタック開発にわたる幅広い技術を扱ってきました。",
    },
    projects: {
      label: "主なプロジェクト",
      title: "制作実績",
      description: "最近手がけたプロジェクトの一部をご紹介します",
      viewMore: "GitHubでもっと見る",
      items: [
        {
          title: "AIセキュリティテストシステム",
          description: "パーソナライズされた学習パスを持つAI駆動のセキュリティ知識評価システム。",
        },
        {
          title: "顧客ペルソナ生成AI",
          description: "生成AIを使用して購買データから顧客ペルソナを生成するマーケティング支援システム。",
        },
        {
          title: "ロボットシミュレーション環境",
          description: "NVIDIA Isaac SimとROS2を使用した産業用ロボットの3Dシミュレーション環境。",
        },
        {
          title: "ゴルフ予約チャットボット",
          description: "コールセンター業務を代替するゴルフ予約自動化AIチャットボット。",
        },
        {
          title: "給与・勤怠管理システム",
          description: "従業員の勤怠管理と給与計算を統合したWebシステム。",
        },
        {
          title: "AI議事録サマリー",
          description: "社内効率化のための会議自動要約・翻訳ツール。",
        },
      ],
    },
    experience: {
      label: "キャリア",
      title: "職務経歴",
      description: "これまでの職務経歴とキャリアの歩みをご紹介します。",
      items: [
        {
          role: "フルスタックエンジニア",
          company: "アカツキAIテクノロジーズ",
          period: "2025年11月 – 現在",
          location: "東京, 日本",
          achievements: [
            "購買データからAIを用いて顧客ペルソナを生成するマーケティング支援システムを開発。",
            "UI/UXを重視した生成AIチャット機能の設計・実装を担当。",
            "機密性の高いクライアントデータを扱うための厳格なアクセス制御・権限管理を実装。",
          ],
        },
        {
          role: "フルスタックエンジニア（フロントエンドリード）",
          company: "CAL株式会社",
          period: "2025年3月 – 2025年11月",
          location: "東京, 日本",
          achievements: [
            "NEC向けAIセキュリティ知識評価システムのフロントエンド開発をリード。",
            "AWS Cognitoによる認証実装、AWS Amplify・Lambdaを使用したデプロイ管理を担当。",
            "コード品質確保のためのGit承認フロー・コードレビュープロセスを確立。",
          ],
        },
        {
          role: "フルスタックエンジニア / チームリード",
          company: "Mirai Technologies LLC",
          period: "2024年5月 – 2025年3月",
          location: "ウランバートル, モンゴル",
          achievements: [
            "4名チームをリードし、NVIDIA Isaac SimとROS2を用いた3Dロボットシミュレーション環境を構築。",
            "Next.jsとMongoDBを使用したWebベースの勤怠・給与管理システムを開発し、複雑な計算を自動化。",
            "プロジェクト要件定義・設計・チームタスク配分を管理。",
          ],
        },
        {
          role: "Webデベロッパー",
          company: "電通データアーティスト モンゴル",
          period: "2023年4月 – 2024年5月",
          location: "ウランバートル, モンゴル",
          achievements: [
            "React・Django・OpenAI APIを使用したゴルフ予約AIチャットボットを開発し、コールセンター業務を代替。",
            "Python/FastAPIとAWSを使用した社内AI議事録サマリーツールを構築し、多言語翻訳に対応。",
            "インフラ（Docker/AWS）からフロントエンド・バックエンドまで全工程の開発を担当。",
          ],
        },
      ],
    },
    contact: {
      label: "お問い合わせ",
      title: "一緒に働きましょう",
      description: "求人・コラボレーション・プロジェクトなど、お気軽にお問い合わせください。",
    },
    footer: {
      rights: "© 2025 CodyPortfolio. All rights reserved.",
      privacy: "プライバシーポリシー",
      terms: "利用規約",
    },
  },
};
