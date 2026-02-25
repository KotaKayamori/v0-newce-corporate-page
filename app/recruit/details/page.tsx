import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollingBanner from "@/components/scrolling-banner"

export default function RecruitDetailsPage() {
  const jobDetails = [
    {
      title: "AIエンジニア",
      safeId: "ai-engineer",
      description: "生成AIやそれをベースにしたプロダクトの設計、開発、トレーニング、最適化",
      requirements: [
        "生成AIの深い理解と実装経験",
        "PythonおよびPyTorchなどのAI/MLフレームワークの経験",
        "データ処理ツール（Pandas, NumPy, SQLなど）の使用経験",
      ],
      preferredSkills: [
        "生成AIを用いたプロダクト開発経験",
        "クラウドインフラ（AWS, Azure, GCPなど）の経験",
        "オープンソースプロジェクトへの貢献実績",
      ],
      responsibilities: [
        "最新のAI技術を活用した革新的なプロダクト開発",
        "AIモデルのトレーニングと最適化",
        "データパイプラインの構築と管理",
        "チーム内での技術的なリーダーシップの発揮",
      ],
    },
    {
      title: "フルスタックエンジニア",
      safeId: "fullstack-engineer",
      description: "フロントエンドとバックエンドの両方の設計・開発・運用",
      requirements: [
        "React.jsやVue.jsを使用したフロントエンド開発経験",
        "Node.jsやPythonを使用したバックエンド開発経験",
        "Gitを用いたバージョン管理スキル",
      ],
      preferredSkills: [
        "RESTful APIやGraphQLの設計・開発経験",
        "DevOpsプロセスの経験（CI/CD, Docker, Kubernetesなど）",
        "クラウドインフラ（AWS, Azure, GCP）の知識",
      ],
      responsibilities: [
        "フロントエンドとバックエンドの両方の開発と保守",
        "パフォーマンスとスケーラビリティを考慮したアーキテクチャ設計",
        "コードレビューとベストプラクティスの推進",
        "新しい技術の評価と導入",
      ],
    },
    {
      title: "フロントエンドエンジニア",
      safeId: "frontend-engineer",
      description: "ユーザーフレンドリーなUIの設計および実装、AI機能を組み込んだフロントエンドアプリケーションの開発",
      requirements: [
        "React.js、Vue.js、またはその他のフロントエンドフレームワークの実務経験",
        "HTML/CSS/JavaScriptの深い理解",
        "UI/UX設計経験またはデザインツール（Figma, Adobe XDなど）の使用経験",
        "Gitを使用したバージョン管理スキル",
      ],
      preferredSkills: [
        "基本的なバックエンド開発スキル（Node.jsなど）",
        "モバイルファーストの設計経験",
        "アクセシビリティ標準への理解",
      ],
      responsibilities: [
        "ユーザーインターフェースの設計と実装",
        "レスポンシブデザインの実現",
        "フロントエンドのパフォーマンス最適化",
        "デザインチームとの協力",
      ],
    },
    {
      title: "バックエンドエンジニア",
      safeId: "backend-engineer",
      description:
        "高スケーラビリティなAPIやデータベース構造の設計・開発、クラウドベースのバックエンドインフラの構築・管理",
      requirements: [
        "Node.js, Pythonなどを使用したバックエンド開発経験",
        "RESTful APIやGraphQLの設計および実装経験",
        "データベース管理経験（SQL, NoSQL）",
        "Gitを使用したバージョン管理スキル",
      ],
      preferredSkills: [
        "DevOpsプロセスの知識と経験（CI/CD, Docker, Kubernetes）",
        "クラウドプラットフォーム（AWS, Azure, GCP）の使用経験",
        "分散システムの設計・運用経験",
      ],
      responsibilities: [
        "バックエンドサービスとAPIの設計・開発",
        "データベース設計と最適化",
        "セキュリティとパフォーマンスの確保",
        "マイクロサービスアーキテクチャの実装",
      ],
    },
    {
      title: "データエンジニア",
      safeId: "data-engineer",
      description:
        "データパイプラインの設計、構築、運用、ビッグデータ技術を用いたデータの収集、変換、格納、データウェアハウスおよびデータベースの最適化",
      requirements: [
        "ETLツールの使用経験（Apache Airflow, Talendなど）",
        "SQLおよびNoSQLデータベースの運用経験",
        "クラウドデータソリューション（BigQuery, Redshift, Snowflakeなど）の使用経験",
        "PythonやScalaを用いたデータ処理スクリプトの開発経験",
      ],
      preferredSkills: [
        "ストリーミングデータ技術（Apache Kafka, Spark Streamingなど）の知識",
        "データガバナンスおよびセキュリティの知識",
        "データビジュアライゼーションツール（Tableau, Power BI, Lookerなど）の経験",
      ],
      responsibilities: [
        "データパイプラインの設計と実装",
        "データウェアハウスの構築と管理",
        "データ品質の監視と改善",
        "ビッグデータ処理の最適化",
      ],
    },
    {
      title: "QAエンジニア",
      safeId: "qa-engineer",
      description:
        "テスト設計・実施・分析を通じた品質保証、テスト自動化ツールの導入と運用、開発チームとの連携による課題解決",
      requirements: [
        "ソフトウェアテストの実務経験（機能テスト、回帰テストなど）",
        "テスト自動化ツール（Selenium、Appiumなど）の使用経験",
        "Gitを用いたバージョン管理経験",
      ],
      preferredSkills: [
        "クラウド環境でのテスト環境構築経験",
        "セキュリティテストや負荷テストの知識",
        "アジャイル開発環境でのテスト経験",
      ],
      responsibilities: [
        "テスト計画の策定と実行",
        "自動化テストフレームワークの構築",
        "バグの特定と報告",
        "品質メトリクスの追跡と改善提案",
      ],
    },
    {
      title: "Dev Opsエンジニア",
      safeId: "devops-engineer",
      description:
        "クラウド環境を活用したインフラストラクチャの設計、構築、管理、CI/CDパイプラインの構築、システムの信頼性・スケーラビリティ・セキュリティの向上",
      requirements: [
        "クラウドプラットフォーム（AWS, Azure, GCP）の深い理解と実務経験",
        "DockerやKubernetesなどのコンテナ技術に関する知識",
        "CI/CDツール（Jenkins, GitHub Actions, CircleCIなど）の使用経験",
        "サーバーおよびネットワーク管理の経験",
      ],
      preferredSkills: [
        "SRE（Site Reliability Engineering）の実務経験",
        "セキュリティ関連の知識（特にクラウドセキュリティ）",
        "IaC（Infrastructure as Code）の経験（Terraform, CloudFormationなど）",
      ],
      responsibilities: [
        "CI/CDパイプラインの構築と最適化",
        "クラウドインフラの設計と管理",
        "システムの監視とトラブルシューティング",
        "セキュリティとコンプライアンスの確保",
      ],
    },
    {
      title: "UI/UXデザイナー",
      safeId: "ui-ux-designer",
      description:
        "プロダクトのユーザー体験設計および改善、ユーザーインターフェース（UI）の設計およびプロトタイピング、ユーザー調査やテストを通じたインサイトの収集と反映",
      requirements: [
        "Figma, Adobe XD, Sketchなどのデザインツールの使用経験",
        "UXリサーチやユーザビリティテストの実施経験",
        "デザインシステムの構築および管理スキル",
        "HTML/CSSの基本的な理解",
      ],
      preferredSkills: [
        "フロントエンドエンジニアリングに関する知識",
        "アクセシビリティに関する知識（WCAGなど）",
        "モーションデザインやアニメーション制作スキル",
      ],
      responsibilities: [
        "ユーザー中心のデザインプロセスの実践",
        "プロトタイプの作成とユーザーテスト",
        "デザインシステムの開発と維持",
        "エンジニアとの協力によるデザイン実装",
      ],
    },
    {
      title: "プロダクトマネージャー",
      safeId: "product-manager",
      description: "プロダクトの全体的なビジョンと戦略の策定、ユーザーのニーズや市場動向を分析し、プロダクト要件を定義",
      requirements: [
        "プロダクトマネジメントまたは類似の役割での実務経験",
        "ソフトウェア開発プロセス（アジャイル、スクラムなど）への深い理解",
        "ユーザーリサーチやデータ分析を基にした意思決定スキル",
        "日本語および英語での円滑なコミュニケーションスキル",
      ],
      preferredSkills: [
        "AIまたはテクノロジープロダクトにおける経験",
        "プロダクトデザインツール（Figma, Miroなど）の使用経験",
        "クラウドサービス（AWS, Azure, GCP）の基本的な理解",
      ],
      responsibilities: [
        "プロダクトロードマップの策定と管理",
        "ステークホルダー間の調整と合意形成",
        "市場分析と競合調査",
        "プロダクトの成功指標の定義と追跡",
      ],
    },
    {
      title: "マーケティングマネージャー",
      safeId: "marketing-manager",
      description:
        "AIエージェントの市場戦略の策定と実行、顧客ターゲティングおよびブランドポジショニングの構築、マーケティングキャンペーンの企画、実施、分析",
      requirements: [
        "デジタルマーケティング（SEO, SEM, SNS広告）の実務経験",
        "データドリブンなマーケティング戦略の立案能力",
        "プロダクトマーケティングの知識と実績",
        "Google Analyticsや広告プラットフォーム（Google Ads, Facebook Adsなど）の使用経験",
      ],
      preferredSkills: [
        "AIやテクノロジープロダクトのマーケティング経験",
        "PRやメディアリレーションの経験",
        "グローバル市場向けのマーケティングキャンペーン運用経験",
      ],
      responsibilities: [
        "マーケティング戦略の策定と実行",
        "デジタル広告キャンペーンの管理",
        "コンテンツマーケティングの推進",
        "マーケティングROIの分析と最適化",
      ],
    },
    {
      title: "インサイドセールス",
      safeId: "inside-sales",
      description:
        "リードへのアプローチから商談機会の創出、CRMを活用したデータドリブンな営業活動を担っていただきます。",
      requirements: [
        "営業またはカスタマー対応の実務経験",
        "CRMツール（Salesforce、HubSpotなど）の使用経験",
        "優れたコミュニケーション能力と傾聴力",
        "課題発見力と商談化の戦略的思考力",
      ],
      preferredSkills: [
        "IT／SaaS領域でのインサイドセールス経験",
        "MAツール（Marketo、Pardotなど）との連携経験",
        "スタートアップやベンチャーでの営業経験",
        "KPI設計や営業戦略立案の経験",
      ],
      responsibilities: [
        "見込み顧客へのアウトバウンド活動（電話、メール、オンライン会議など）",
        "リードの発掘と育成",
        "商談機会の創出と初期提案",
        "CRMを活用した営業活動の記録と分析",
      ],
    },
    {
      title: "フィールドセールス",
      safeId: "field-sales",
      description:
        "商談からクロージングまでの提案営業、顧客課題に対する最適なソリューションの提示、契約後のオンボーディング支援を行っていただきます。",
      requirements: [
        "法人営業（BtoB）の実務経験",
        "ヒアリング〜提案〜クロージングまでの一連の営業スキル",
        "高い課題解決力とプレゼンテーション能力",
        "チームとの協働による成果創出への貢献姿勢",
      ],
      preferredSkills: [
        "無形商材（SaaS、コンサルティングなど）の提案経験",
        "AIやITプロダクトへの基本的理解",
        "カスタマージャーニーやセールスプロセス設計の経験",
        "スタートアップフェーズでの営業体制構築経験",
      ],
      responsibilities: [
        "顧客との対面・オンラインでの商談",
        "顧客課題のヒアリングと最適なソリューション提案",
        "契約交渉とクロージング",
        "契約後の顧客オンボーディング支援",
      ],
    },
    {
      title: "カスタマーサクセス",
      safeId: "customer-success",
      description:
        "導入後の顧客フォローアップ、利用促進、定着支援、継続率向上・アップセルのための施策立案・実行を行っていただきます。",
      requirements: [
        "カスタマーサクセスまたはアカウントマネジメントの実務経験",
        "顧客との関係構築・課題把握力",
        "ツール活用による業務効率化・レポーティング経験（Notion, Slack, Excelなど）",
        "問題解決を主体的に推進できるスキル",
      ],
      preferredSkills: [
        "SaaSの導入・運用支援経験",
        "NPSやCSATなどの指標を用いた改善施策の実施経験",
        "テックタッチ・ハイタッチのバランス感覚",
        "プロダクトチームやセールスチームとの連携経験",
      ],
      responsibilities: [
        "顧客の製品活用状況のモニタリングと分析",
        "定期的な顧客とのコミュニケーションと関係構築",
        "製品活用促進のためのトレーニングやリソース提供",
        "継続利用とアップセル・クロスセルの機会創出",
      ],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full pt-12 pb-12 md:pb-24 lg:pb-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start">
              {/* Breadcrumb navigation */}
              <div className="text-sm mb-4">
                <Link href="/" className="underline hover:text-gray-600">
                  Home
                </Link>
                <span className="mx-1">・</span>
                <Link href="/recruit" className="underline hover:text-gray-600">
                  Recruit
                </Link>
                <span className="mx-1">・</span>
                <span>職種詳細</span>
              </div>

              <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none text-left mt-24 mb-8">
                職種詳細
              </h1>

              <Link href="/recruit" className="mb-8 inline-flex items-center text-blue-600 hover:underline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                募集職種一覧に戻る
              </Link>

              {/* Job Details */}
              <div className="w-full space-y-12">
                {jobDetails.map((job, index) => (
                  <div key={index} className="border-2 border-gray-200 rounded-xl p-8">
                    <h2 className="text-2xl font-bold mb-4" id={job.safeId}>
                      {job.title}
                    </h2>
                    <p className="text-lg mb-6">{job.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">必須スキル</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          {job.requirements.map((req, i) => (
                            <li key={i} className="text-gray-700">
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-4">歓迎スキル</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          {job.preferredSkills.map((skill, i) => (
                            <li key={i} className="text-gray-700">
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">主な業務内容</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        {job.responsibilities.map((resp, i) => (
                          <li key={i} className="text-gray-700">
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Navigation */}
              <div className="w-full mt-12 border-2 border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">職種一覧</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {jobDetails.map((job, index) => (
                    <a key={index} href={`#${job.safeId}`} className="text-blue-600 hover:underline">
                      {job.title}
                    </a>
                  ))}
                </div>
              </div>

              <div className="w-full mt-12 text-center">
                <Link href="/contact">
                  <Button className="inline-flex h-12 items-center justify-center rounded-md bg-black px-8 text-base font-medium text-white shadow transition-colors hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus-visible:ring-gray-300">
                    応募する
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Scrolling Banner */}
        <ScrollingBanner />
      </main>
      <Footer />
    </div>
  )
}
