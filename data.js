const siteData = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      leadership: "Leadership",
      projects: "Latest Project",
      contact: "Contact",
      languageToggle: "中"
    },
    hero: {
      name: "HsinChun Chan (James)",
      title: "Marketing, Communications & Product Strategy",
      subtitle: "Combining training in Economics and Social Work with hands-on experience in content marketing, campaign coordination, and audience-focused execution.",
      cta: "Explore Experience"
    },
    about: {
      title: "About",
      description: "I am interested in roles across marketing, corporate communications, and product-related strategy. With training in both Economics and Social Work, I bring a combination of data awareness and audience understanding. My experience includes content production, campaign support, performance tracking, and cross-functional coordination. I value clear communication, thoughtful execution, and using insights to turn ideas into work that creates practical value."
    },
    experience: {
      title: "Experience",
      items: [
        {
          role: "Marketing and Content Intern",
          company: "CET Academic Programs",
          companyIcon: "https://i.ibb.co/yc5K2RVx/30c014d2b932.png",
          period: "Aug 2025 – Dec 2025",
          tags: ["Social Media Marketing", "Content Production", "Google Analytics", "Bilingual Communication"],
          summary: "Supported marketing and content operations for an international education organization, covering social media content production, campaign coordination, data tracking, and bilingual communication.",
          achievements: [
            "**Social Media Production**: Produced social media content in multiple formats, including short-form videos and visual posts, using Premiere Pro, Photoshop, and Canva.",
            "**Data Tracking & Analysis**: Tracked traffic sources and engagement performance with Google Analytics to support content adjustments and improve campaign effectiveness.",
            "**Operational Optimization**: Reorganized internal inventory and contact records with Excel functions such as VLOOKUP and PivotTables, improving search efficiency and administrative workflow.",
            "**Bilingual Coordination**: Served as a bilingual communication bridge between international students and local vendors, helping resolve disputes through fact-based coordination and reducing potential compensation costs."
          ],
          takeaway: "This experience strengthened my ability to connect content, operations, and communication while making decisions based on both audience needs and data signals."
        },
        {
          role: "Project Assistant",
          company: "National Center for Theoretical Sciences (NCTS) Mathematics",
          companyIcon: "https://i.ibb.co/jPjHDqVM/e93c443760b7.png",
          period: "Feb 2026 – Present",
          tags: ["Project Coordination", "Administrative Operations", "Bilingual Coordination", "Event Management"],
          summary: "Provide project and administrative support for academic events and research-related operations in a fast-paced environment involving domestic and international scholars.",
          achievements: [
            "**Event Coordination**: Supported the coordination and execution of national-level seminars and academic events.",
            "**Administrative Operations**: Handled administrative processes and on-site logistics with accuracy under tight timelines.",
            "**Crisis Management**: Provided real-time problem solving during events to ensure smooth operations and communication.",
            "**Stakeholder Communication**: Maintained clear and professional communication with scholars, speakers, and internal stakeholders."
          ],
          takeaway: "This role sharpened my ability to stay organized, respond quickly under pressure, and support complex projects with professionalism and attention to detail."
        }
      ]
    },
    leadership: {
      title: "Leadership & Activities",
      items: [
        {
          role: "Vice President",
          company: "NTU College of Social Sciences Student Association",
          companyIcon: "https://i.ibb.co/NgcyVfDH/538f4769e018.png",
          period: "2025 – Present",
          tags: ["Strategy Realignment", "Stakeholder Negotiation", "Risk Management", "Public Infrastructure"],
          summary: "Led student welfare and campus improvement initiatives by aligning team resources with practical student needs and coordinating with university stakeholders.",
          achievements: [
            "**Strategic Realignment**: Redirected team strategy away from highly sensitive and politically contentious issues, focusing resources and budget on student welfare initiatives.",
            "**Risk Management**: Proposed a risk management framework and deposit SOP to address locker access disputes, successfully restoring student usage rights.",
            "**Public Infrastructure Advocacy**: Negotiated for the installation of a public printer to improve access to academic resources and daily convenience for students.",
            "**Campus Privacy Improvement**: Pushed forward a campus privacy project, including the addition of urinal partitions to improve usability and comfort.",
            "**Community Engagement**: Revitalized open common areas by introducing recurring community activities such as movie screenings and board games."
          ],
          takeaway: "I learned how to turn broad student concerns into concrete, negotiable proposals, and how to balance stakeholder communication, feasibility, and real user needs."
        },
        {
          role: "Vice President, PR & Sponsorship",
          company: "NTU Breakdance Club",
          companyIcon: "https://i.ibb.co/fYYF6TpV/5b61b7104037.png",
          period: "2024 – 2025",
          tags: ["Sponsorship outreach", "O2O Marketing", "Demand Estimation", "Event Promotion"],
          summary: "Led external communication, sponsorship outreach, and event promotion for club activities, with a focus on audience growth, conversion, and resource planning.",
          achievements: [
            "**O2O Marketing Tracking**: Integrated QR codes and Bitly links into physical promotional materials to track offline-to-online traffic and evaluate conversion performance.",
            "**Demand Forecasting**: Used survey responses and historical participation patterns to support demand estimation and inventory planning.",
            "**Sponsorship Negotiation**: Helped secure sponsorship support from brands including Red Bull, Monster Energy, and Taiwan Beer through proposal coordination.",
            "**Event Promotion**: Supported promotional planning for large-scale events involving over 200 participants and cross-campus collaboration."
          ],
          takeaway: "This experience gave me hands-on exposure to audience engagement, sponsorship communication, and using lightweight data methods to support promotion and planning."
        }
      ]
    },
    projects: {
      title: "Latest Project",
      items: [
        {
          name: "Porsche Macan Option Strategy Analysis",
          period: "Independent Project | 2026",
          summary: "Built an exploratory market analysis project on Taiwan’s Porsche Macan resale market to examine how selected options may relate to listing-price signals and what that may imply for option strategy and value communication.",
          tags: ["Market Research", "Option Strategy", "Ridge Regression", "Automotive Analysis"],
          highlights: [
            "**Business Question**: Explored which options in Taiwan’s Porsche Macan resale market appear to generate stronger listing-price signals, and which may function more as first-owner perceived value.",
            "**Research Design**: Collected 133 listings of 2019+ Porsche Macan models from a major Taiwan resale platform and transformed unstructured seller descriptions into option-level features.",
            "**Modeling & Validation**: Applied Ridge Regression while controlling for year, mileage, and vehicle trim, with manual spot-checking on sampled listings to validate key option extraction consistency.",
            "**Key Findings**: Found stronger positive resale signals for options such as Panoramic Sunroof and ACC, while features like BOSE audio and multi-way seats showed weaker or negative directional price signals.",
            "**Business Implications**: Framed the results into exploratory discussion points for option positioning, value communication, and bundle strategy in the premium automotive market."
          ],
        takeaway: "This project helped me move from personal interest in automotive brands to a more structured understanding of how product configuration, buyer perception, and secondary-market signals can inform business and option strategy.",
        fileLink: "./porsche_macan_strategy_v2.html"
        },
        {
          name: "Audience Insight & Program Optimization",
          period: "Aug 2025 – Dec 2025 | CET Academic Programs",
          summary: "Analyzed end-of-term user evaluation data (N=68) to identify student pain points and provide data-backed operational recommendations for program improvement.",
          tags: ["User Research", "Data Synthesis", "Operational Strategy", "Problem Solving"],
          highlights: [
            "**Context**: The organization needed to evaluate satisfaction to optimize future marketing and operational strategies.",
            "**My Role**: Synthesized quantitative ratings and qualitative open-ended responses from 68 participants.",
            "**Key Insights**: Identified critical operational pain points, such as a mismatch in internship expectations and housing cleaning privacy issues.",
            "**Data-Backed Recommendations**: Proposed an 'opt-in/opt-out' cleaning SOP and stricter expectation-alignment guidelines for internships."
          ],
          takeaway: "This project allowed me to translate user feedback into actionable operational adjustments, bridging the gap between audience insights and business execution.",
          fileLink: "./assets/CET_User_Research_Report.pdf"
        },
        {
          name: "Event Operations & Brand Marketing",
          period: "2024 – 2025 | NTU Breakdance Club",
          summary: "Directed end-to-end event operations, brand visual design, and sponsorship marketing for a 200+ person event, achieving 100% sell-through with zero-waste inventory.",
          tags: ["Brand Identity", "FMCG Sponsorship", "O2O Marketing", "Inventory Control"],
          highlights: [
            "**Context**: Faced with budget constraints and unpredictable demand, requiring effective resource allocation and external funding.",
            "**Brand Identity & Visual Execution**: Independently established the event's brand image, directing the creative process from Key Visual發想 to final graphic design.",
            "**Stakeholder & Sponsor Coordination**: Pitched data-driven business proposals to secure sponsorships from brands like Red Bull, Monster Energy, and Taiwan Beer.",
            "**O2O Promotion Tracking**: Integrated QR codes and Bitly links to measure offline-to-online traffic conversion rates.",
            "**Event Execution & Inventory Control**: Engineered a demand forecasting model utilizing pre-order surveys, resulting in zero inventory waste."
          ],
          takeaway: "Through this event, I managed complex operations, coordinated with external sponsors, and independently drove creative brand execution from start to finish."
        },
        {
          name: "User Needs Analysis & Product Design",
          period: "School Project | Course: Project Design & Evaluation",
          summary: "Conducted end-to-end user research on 62 students to identify behavioral blockers for breakfast consumption, translating data insights into the foundation for a health-driven WebApp.",
          tags: ["User Research", "Statistical Analysis", "Audience Segmentation", "Product Strategy"],
          highlights: [
            "**User Needs Assessment**: Designed a survey (N=68) evaluating dietary habits. Discovered nearly 70% of students eat breakfast irregularly.",
            "**Data-Driven Segmentation**: Applied statistical methods (Chi-Square, Mann-Whitney U tests) to uncover behavioral variables like dormitory living.",
            "**Pain Point Analysis**: Segmented audience into 'irregular eaters' (motivational needs) and 'regular eaters' (quality needs like low-GI).",
            "**Product Strategy Formulation**: Translated insights into a LINE-based chatbot WebApp to track daily habits and push personalized recommendations."
          ],
          takeaway: "This research allowed me to apply statistical tools for audience segmentation and translate raw survey data into clear, actionable product features.",
          fileLink: "./assets/Breakfast_User_Research_Report.pdf"
        },
        {
          name: "Full-Stack WebApp & AI Bot Development",
          period: "School Project | Course: Project Design & Evaluation",
          summary: "Led the product planning and technical development of 'Breakfast Club,' using AI tools to accelerate the build of a LINE bot and React web app.",
          tags: ["Product Planning", "Full-Stack Dev", "System Architecture", "AI Integration"],
          highlights: [
            "**AI-Assisted Full-Stack Development**: Directed an AI workflow to independently build architecture including React frontend, Flask backend, and Supabase.",
            "**System Architecture & Security**: Migrated database writes to Flask backend and implemented Row Level Security (RLS) for data privacy.",
            "**AI Vision Integration**: Integrated Gemini 2.5 Flash Lite API to perform real-time image recognition and output structured JSON data.",
            "**UX & Product Strategy**: Applied the 'Audience Effect' to boost retention and engineered an 'Optimistic UI' mechanism for social interactions.",
          ],
          takeaway: "This project strengthened my ability to turn a product concept into a working system, while coordinating product logic, technical structure, and implementation details.",
          fileLink: "./assets/Breakfast_Club_Technical_Case_Study.pdf"
        }
      ]
    },
    skills: {
      title: "Core Skills",
      items: [
        "**Marketing & Communications**: Content Planning, Campaign Coordination, Audience Insight, Bilingual Communication",
        "**Analytics & Operations**: Google Analytics, Excel (VLOOKUP, PivotTables), Performance Tracking, Survey Analysis",
        "**Content Tools**: Adobe Premiere Pro, Photoshop, Canva",
        "**Languages**: Mandarin (Native), English (Fluent)"
      ]
    },
    contact: {
      title: "Contact",
      description: "I am open to opportunities in marketing, communications, and product-related roles where I can contribute through thoughtful execution and audience-focused strategy.",
      email: "b12310052@g.ntu.edu.tw",
      phone: "+886-965-281-270"
    }
  },
  zh: {
    nav: {
      about: "關於",
      experience: "經歷",
      leadership: "領導經驗",
      projects: "最新專案",
      contact: "聯絡",
      languageToggle: "EN"
    },
    hero: {
      name: "詹新群 (James)",
      title: "行銷、企業溝通與產品策略",
      subtitle: "結合經濟系與社工系的跨領域訓練，具備內容行銷、專案協作、數據追蹤與以受眾為導向的實務經驗。",
      cta: "查看經歷"
    },
    about: {
      title: "關於我",
      description: "我目前希望朝行銷、企業溝通，以及與產品策略相關的職涯方向發展。經濟與社工的跨領域背景，使我同時具備數據敏感度與對受眾需求的理解能力。過去經驗涵蓋內容製作、行銷支援、成效追蹤與跨部門溝通協作。我重視清楚的表達、穩定的執行，以及透過洞察將想法轉化為真正有價值的成果。"
    },
    experience: {
      title: "專業經歷",
      items: [
        {
          role: "Marketing and Content Intern",
          company: "CET Academic Programs",
          companyIcon: "https://i.ibb.co/yc5K2RVx/30c014d2b932.png",
          period: "2025.08 – 2025.12",
          tags: ["社群行銷", "內容產製", "數據追蹤", "雙語溝通"],
          summary: "於國際教育機構支援行銷與內容營運，工作涵蓋社群內容製作、行銷協作、數據追蹤與雙語溝通。",
          achievements: [
            "**社群內容製作**：使用 Premiere Pro、Photoshop、Canva 製作短影音與圖文內容，支援社群媒體經營。",
            "**數據追蹤分析**：透過 Google Analytics 追蹤流量來源與互動表現，協助調整內容方向並優化成效。",
            "**行政效率優化**：運用 Excel 函數如 VLOOKUP 與 PivotTables 重整內部庫存資料，提升檢索效率。",
            "**雙語溝通橋樑**：擔任外籍學生與在地廠商之溝通窗口，以事實釐清問題並降低潛在賠償成本。"
          ],
          takeaway: "這段經驗讓我更熟悉如何把內容、營運與溝通串連起來，並從受眾需求與數據訊號中調整執行方向。"
        },
        {
          role: "Project Assistant",
          company: "National Center for Theoretical Sciences (NCTS) Mathematics",
          companyIcon: "https://i.ibb.co/jPjHDqVM/e93c443760b7.png",
          period: "2026.02 – 至今",
          tags: ["行政執行", "專案協作", "雙語溝通", "活動管理"],
          summary: "支援學術活動與專案行政執行，在需與國內外學者協作的快節奏環境中處理專案與營運細節。",
          achievements: [
            "**學術活動規劃**：支援國家級研討會與學術活動之規劃與執行。",
            "**時程管理執行**：在時程緊湊的情況下處理行政流程與現場協調工作。",
            "**危機處理應對**：面對活動中的突發狀況，能快速應對並維持整體流程順暢。",
            "**專業同仁溝通**：與學者、講者及內部同仁保持清楚且專業的溝通。"
          ],
          takeaway: "這份工作強化了我在高壓情境中的組織能力、反應速度，以及支援複雜專案時所需的細節掌握。"
        }
      ]
    },
    leadership: {
      title: "領導經驗",
      items: [
        {
          role: "副會長",
          company: "國立臺灣大學社科院學生會",
          companyIcon: "https://i.ibb.co/NgcyVfDH/538f4769e018.png",
          period: "2025 – 至今",
          tags: ["策略轉型", "利害關係人協調", "風險管理", "公共設施優化"],
          summary: "主導學生福利與校園改善專案，將團隊資源聚焦於具體需求，並與校方進行溝通協調，推動可落地的改善方案。",
          achievements: [
            "**營運方向轉型**：避開高度敏感議題，將預算與資源集中於學生福利相關專案，提升支持度。",
            "**風險管理制度**：針對置物櫃爭議提出具體的風險管理與押金 SOP，成功恢復學生使用權。",
            "**公共設施爭取**：向院方爭取並推動公共印表機設置，改善學生在學業上的日常需求。",
            "**校園隱私改善**：推動包含男廁小便斗隔板增設等體驗改善，提升空間友善度。",
            "**社群互動活化**：透過電影放映與桌遊等活動提升空間使用率與社群互動。"
          ],
          takeaway: "這段經驗讓我學會如何把抽象需求轉化成具體提案，也更理解在利害關係人之間平衡溝通、可行性與使用者需求的重要性。"
        },
        {
          role: "副社長（公關與贊助）",
          company: "國立臺灣大學地板街舞社",
          companyIcon: "https://i.ibb.co/fYYF6TpV/5b61b7104037.png",
          period: "2024 – 2025",
          tags: ["品牌贊助", "O2O 行銷", "需求估算", "活動宣傳"],
          summary: "負責活動對外溝通、贊助接洽與宣傳規劃，聚焦於受眾觸及、轉換追蹤與資源整合。",
          achievements: [
            "**O2O 行銷追蹤**：於實體文宣中導入 QR code 與 Bitly 連結，追蹤並量化流量轉換表現。",
            "**需求估算規劃**：結合問卷與歷史資料，協助進行活動與周邊品項的需求估算。",
            "**品牌贊助接洽**：成功為社團爭取到 Red Bull、Monster Energy、台灣啤酒等品牌贊助。",
            "**大規模活動宣傳**：支援超過 200 人規模之活動宣傳與跨校合作執行。"
          ],
          takeaway: "這段經驗讓我實際接觸到受眾經營、品牌溝通，以及如何用簡單但有效的數據方法支持宣傳與決策。"
        }
      ]
    },
    projects: {
      title: "最新專案",
      items: [
         {
            name: "Porsche Macan 台灣二手市場選配策略分析",
            period: "獨立專案｜2026",
            summary: "以台灣 Porsche Macan 二手市場為對象，建立探索式市場分析專案，研究特定選配與刊登價格訊號的關聯，並延伸思考其對 option strategy 與價值溝通的意涵。",
            tags: ["市場研究", "選配策略", "Ridge Regression", "汽車產業分析"],
            highlights: [
              "**研究問題**：探討台灣 Porsche Macan 二手市場中，哪些選配似乎能形成較強的價格訊號，哪些則更偏向首任車主的感知價值。",
              "**研究設計**：擷取 133 筆 2019 年以上 Porsche Macan 刊登資料，並將賣家非結構化文字描述轉換為可分析的選配特徵。",
              "**模型與驗證**：在控制年份、里程數與車型 trim 的情況下，使用 Ridge Regression 估計方向性價格訊號，並透過人工抽樣 spot-check 驗證關鍵選配萃取的一致性。",
              "**關鍵發現**：全景天窗與 ACC 呈現較強的正向 resale signal；BOSE 音響與多向座椅等舒適型配備則未呈現同等程度的價格支撐。",
              "**商業意涵**：將結果轉化為 option positioning、價值溝通與 bundle strategy 的探索式討論方向，作為 premium automotive 市場觀察的輸入。"
            ],
            takeaway: "這個專案讓我把對汽車品牌的興趣，進一步轉化為對產品配置、買方感知與二手市場訊號之間關係的結構化理解，也讓我更確認自己想往汽車產業中的市場研究與策略職能靠近。",
            fileLink: "./porsche_macan_strategy_v2.html"
        },
        {
          name: "受眾洞察與營運服務優化",
          period: "2025.08 – 2025.12 | CET Academic Programs",
          summary: "分析 68 份期末使用者評鑑數據，找出服務痛點，並提出以數據為基礎的營運優化建議。",
          tags: ["使用者研究", "數據彙整", "營運策略", "問題解決"],
          highlights: [
            "**專案背景**：機構需要評估計畫滿意度與營運成效，作為未來行銷與服務升級的依據。",
            "**我的角色**：彙整分析 68 位參與者的量化評分與質化回饋，涵蓋學術、住宿與實習。",
            "**數據洞察**：找出核心痛點，發現使用者對於實習期待落差與住宿清潔隱私有顯著負評。",
            "**落地建議**：提出導入「清潔服務 Opt-in/out 機制」以及更嚴謹的「實習期待對齊規範」。"
          ],
          takeaway: "這個專案讓我更熟悉如何從使用者回饋中整理關鍵問題，並將洞察轉化為具體可執行的營運優化建議。",
          fileLink: "./assets/CET_User_Research_Report.pdf"
        },
        {
          name: "大型專案營運與品牌整合行銷",
          period: "2024 – 2025 | 台大地板社",
          summary: "統籌超過 200 人規模之大型專案營運、品牌視覺建立與贊助行銷，透過需求預測達成 100% 完售且零浪費的營運目標。",
          tags: ["品牌視覺", "FMCG 贊助", "O2O 行銷", "庫存控管"],
          highlights: [
            "**專案背景**：面對預算限制與不確定的商品需求，需要精準資源分配與外部商業贊助。",
            "**品牌建立與視覺統籌**：獨立主導品牌形象建立，包辦從主視覺發想至後期全通路文宣製圖。",
            "**利害關係人與贊助協商**：撰寫具數據佐證的企劃書，成功爭取 Red Bull、Monster 等品牌贊助。",
            "**O2O 行銷成效追蹤**：全面導入 QR Code 與 Bit.ly，追蹤並量化「線下至線上」轉換率。",
            "**營運落地與庫存控管**：運用問卷數據建立需求預測模型，設定 30% 安全庫存達成零浪費。"
          ],
          takeaway: "透過這個專案，我實際將預算控管與 O2O 數據追蹤應用於活動宣傳，並從零到一獨立執行了視覺設計與品牌包裝。"
        },
        {
          name: "使用者需求分析與產品設計",
          period: "課堂專案｜專案設計與評估",
          summary: "針對大學生「不常吃早餐」的問題進行 62 份問卷的量化與質化分析，進行受眾分群，並將數據洞察轉化為具備健康驅動力的 WebApp 產品企劃。",
          tags: ["使用者研究", "統計分析", "受眾分群", "產品策略"],
          highlights: [
            "**使用者需求評估**：設計並回收 62 份問卷。發現高達 70% 學生未養成規律吃早餐習慣。",
            "**數據洞察與統計分析**：運用卡方檢定與 U 檢定，分析出「住宿舍」與「晚起」為顯著行為變數。",
            "**受眾分群 (Segmentation)**：將需求分為不規律者的「動機型」與規律者的「品質型」。",
            "**產品策略落地**：將研究洞察轉化為 WebApp 功能規格，設計每日追蹤與社群健康資訊推播。"
          ],
          takeaway: "這個專案讓我實際應用統計工具進行受眾分群，並將數據洞察轉化為切中使用者痛點的產品設計。",
          fileLink: "./assets/Breakfast_User_Research_Report.pdf"
        },
        {
          name: "全端 WebApp 開發與 AI 整合應用",
          period: "課堂專案｜專案設計與評估",
          summary: "主導「Breakfast Club」的產品規劃與技術開發，運用 AI 工具加速構建結合 LINE 聊天機器人與 React WebApp 的習慣養成平台。",
          tags: ["產品規劃", "全端開發", "系統架構", "AI 整合"],
          highlights: [
            "**AI 協作全端開發 (Agentic AI)**：扮演架構師指揮 AI 完成 React 前端、Flask 後端與 Supabase 資料庫建置。",
            "**系統架構與資安升級**：主導系統轉型為後端 API 寫入，並導入 RLS 權限控管機制提升安全性。",
            "**AI 視覺辨識整合**：串接 Gemini 2.5 Flash Lite 模型，實現即時早餐圖片辨識與熱量 JSON 資料轉換。",
            "**UX 體驗與產品營運**：應用「觀眾效應」心理學並導入「樂觀 UI」機制，實現無延遲的使用者互動。"
          ],
          takeaway: "這個專案強化了我將產品概念落地為實際系統的能力，並在過程中學習如何協調產品邏輯、系統架構與技術實作細節。",
          fileLink: "./assets/Breakfast_Club_Technical_Case_Study.pdf"
        }
      ]
    },
    skills: {
      title: "技能專長",
      items: [
        "**行銷與溝通**：內容企劃、行銷協作、受眾洞察、雙語溝通",
        "**數據與營運**：Google Analytics、Excel（VLOOKUP、PivotTables）、成效追蹤、問卷分析",
        "**內容製作工具**：Adobe Premiere Pro、Photoshop、Canva",
        "**語言能力**：中文（母語）、英文（流利）"
      ]
    },
    contact: {
      title: "聯絡資訊",
      description: "我期待投入行銷、企業溝通或與產品相關的職位，透過穩定執行與受眾導向思維，參與有實際影響力的工作。",
      email: "b12310052@g.ntu.edu.tw",
      phone: "+886-965-281-270"
    }
  }
};
