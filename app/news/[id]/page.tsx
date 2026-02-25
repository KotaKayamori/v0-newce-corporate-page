import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollingBanner from "@/components/scrolling-banner"

// Sample blog post data
const blogPostsData = [
  {
    id: 1,
    title: "Newceメンバーに聞いた、渋谷周辺のおすすめグルメランキングTOP5",
    date: "2023年4月15日",
    categories: ["Culture", "People"],
    authors: [
      { name: "Tsubasa Tanaka", role: "Frontend Engineer", image: "/placeholder.svg?height=100&width=100&text=T" },
      { name: "Yui Matsumoto", role: "UI Designer", image: "/placeholder.svg?height=100&width=100&text=Y" },
    ],
    heroImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cropjyujyutuIMG_7524.jpg-gCZgp0IPDGPVrj2jmLWLJtnvNrh9vv.jpeg",
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="lead">渋谷は東京の中でも特に飲食店の激戦区。今回はNewceのオフィスがある渋谷周辺で、社員に愛されている飲食店を紹介します。エンジニアのTsubasaとデザイナーのYuiによる対談形式でお届けします。</p>
        
        <div class="chat-bubble bg-gray-100 p-4 rounded-lg mb-4">
          <p class="font-bold">Tsubasa:</p>
          <p>Yuiさん、今日は渋谷のおすすめグルメについて話し合いましょう！私たちNewceのオフィスは渋谷にあるので、ランチやディナーでよく外食しますよね。</p>
        </div>
        
        <div class="chat-bubble bg-blue-50 p-4 rounded-lg mb-4">
          <p class="font-bold">Yui:</p>
          <p>そうですね！渋谷は本当に飲食店の激戦区で、美味しいお店がたくさんあります。今日は私たちの厳選したTOP5を紹介しましょう！</p>
        </div>
        
        <h2>第5位：麺屋 海神（わだつみ）- 渋谷センター街</h2>
        
        <div class="chat-bubble bg-gray-100 p-4 rounded-lg mb-4">
          <p class="font-bold">Tsubasa:</p>
          <p>5位は私のお気に入りの「麺屋 海神」です。魚介系のスープが特徴的なラーメン店で、特に塩ラーメンが絶品です。</p>
        </div>
        
        <div class="chat-bubble bg-blue-50 p-4 rounded-lg mb-4">
          <p class="font-bold">Yui:</p>
          <p>あそこは私も大好きです！スープが濃厚なのに後味がさっぱりしていて、ランチタイムでも疲れない味ですよね。チャーシューも柔らかくて美味しい。</p>
        </div>
        
        <div class="chat-bubble bg-gray-100 p-4 rounded-lg mb-4">
          <p class="font-bold">Tsubasa:</p>
          <p>そうそう！あと、麺の硬さも選べるのがいいですよね。私はいつも「やや硬め」で注文します。</p>
        </div>
        
        <h2>第4位：焼肉 USHIO - 渋谷道玄坂</h2>
        
        <div class="chat-bubble bg-blue-50 p-4 rounded-lg mb-4">
          <p class="font-bold">Yui:</p>
          <p>4位は「焼肉 USHIO」です。チームでの打ち上げでよく利用しますが、コスパが良くて肉質も素晴らしいんですよ。</p>
        </div>
        
        <div class="chat-bubble bg-gray-100 p-4 rounded-lg mb-4">
          <p class="font-bold">Tsubasa:</p>
          <p>USHIOは予約が取りにくいけど、それだけの価値がありますよね。特にタン塩とハラミが絶品です。あと、キムチの盛り合わせも美味しい！</p>
        </div>
        
        <div class="chat-bubble bg-blue-50 p-4 rounded-lg mb-4">
          <p class="font-bold">Yui:</p>
          <p>そうそう！あと、店内の雰囲気も良くて、接客も丁寧なのでチーム会食にぴったりなんですよね。</p>
        </div>
        
        <h2>第3位：AFURI - 渋谷スクランブルスクエア</h2>
        
        <div class="chat-bubble bg-gray-100 p-4 rounded-lg mb-4">
          <p class="font-bold">Tsubasa:</p>
          <p>3位は「AFURI」です。柚子塩ラーメンが看板メニューですが、どのメニューも本当に美味しいんですよ。</p>
        </div>
        
        <div class="chat-bubble bg-blue-50 p-4 rounded-lg mb-4">
          <p class="font-bold">Yui:</p>
          <p>AFURIは私も大好きです！特に夏場は柚子の爽やかさが効いたラーメンが最高ですよね。あと、チャーシューが薄切りなのに味がしっかりしていて好きです。</p>
        </div>
        
        <div class="chat-bubble bg-gray-100 p-4 rounded-lg mb-4">
          <p class="font-bold">Tsubasa:</p>
          <p>そうですね。スクランブルスクエア店は眺めも良くて、ちょっと贅沢なランチタイムを過ごせますよ。</p>
        </div>
        
        <h2>第2位：渋谷 百軒店 しぶや - 渋谷センター街</h2>
        
        <div class="chat-bubble bg-blue-50 p-4 rounded-lg mb-4">
          <p class="font-bold">Yui:</p>
          <p>2位は「渋谷 百軒店 しぶや」です。和食の居酒屋なんですが、ランチタイムの海鮮丼が絶品なんです！</p>
        </div>
        
        <div class="chat-bubble bg-gray-100 p-4 rounded-lg mb-4">
          <p class="font-bold">Tsubasa:</p>
          <p>あそこは夜も良いですよね。日本酒の種類が豊富で、季節の料理も美味しい。特に刺身の盛り合わせは新鮮で、接待にも使えるクオリティです。</p>
        </div>
        
        <div class="chat-bubble bg-blue-50 p-4 rounded-lg mb-4">
          <p class="font-bold">Yui:</p>
          <p>そうなんです！あと、店内の雰囲気も落ち着いていて、ゆっくり食事を楽しめるのも魅力ですよね。</p>
        </div>
        
        <h2>第1位：SAIKI - 渋谷ストリーム</h2>
        
        <div class="chat-bubble bg-gray-100 p-4 rounded-lg mb-4">
          <p class="font-bold">Tsubasa:</p>
          <p>そして1位は「SAIKI」です！渋谷ストリームにある創作和食のお店で、ランチもディナーも素晴らしいんですよ。</p>
        </div>
        
        <div class="chat-bubble bg-blue-50 p-4 rounded-lg mb-4">
          <p class="font-bold">Yui:</p>
          <p>SAIKIは本当に素晴らしいですね！季節の食材を使った料理が美しく、味も最高です。特に「本日の鮮魚のカルパッチョ」は毎回違う魚を楽しめて、シェフの腕が光ります。</p>
        </div>
        
        <div class="chat-bubble bg-gray-100 p-4 rounded-lg mb-4">
          <p class="font-bold">Tsubasa:</p>
          <p>そうですね。あと、ワインのペアリングも素晴らしくて、ソムリエさんのおすすめを聞くと必ず満足できます。接待や大切な人との食事に最適ですよ。</p>
        </div>
        
        <div class="chat-bubble bg-blue-50 p-4 rounded-lg mb-4">
          <p class="font-bold">Yui:</p>
          <p>そして何より、Newceのオフィスから近いのも嬉しいポイントですね！</p>
        </div>
        
        <h2>まとめ</h2>
        
        <div class="chat-bubble bg-gray-100 p-4 rounded-lg mb-4">
          <p class="font-bold">Tsubasa:</p>
          <p>今回は渋谷周辺のおすすめグルメTOP5を紹介しました。どのお店も本当におすすめなので、渋谷に来た際はぜひ訪れてみてください！</p>
        </div>
        
        <div class="chat-bubble bg-blue-50 p-4 rounded-lg mb-4">
          <p class="font-bold">Yui:</p>
          <p>そうですね！渋谷は常に新しいお店がオープンしているので、また新たな発見があれば共有したいと思います。みなさんも渋谷でのおすすめがあれば、ぜひ教えてくださいね！</p>
        </div>
      </div>
    `,
  },
  {
    id: 2,
    title: "仕事？思い出作り？Newceの冬の全社員合宿で何したの？",
    date: "2025年1月30日",
    categories: ["Company", "Culture"],
    authors: [{ name: "Yui Tanaka", role: "Marketing Manager", image: "/placeholder.svg?height=100&width=100&text=Y" }],
    heroImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cropkiyomizudera-1.jpg-cAIgSV29B7Rc0SNRIjHZtFrhBQycDK.jpeg",
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="lead">2025年1月、Newceは全社員参加の合宿を京都で開催しました。この記事では、2日間にわたる合宿の様子をレポートします。</p>
        
        <h2>合宿の目的：「向き直り」と「思い出づくり」</h2>
        
        <p>今回の合宿には大きく2つの目的がありました。1つは「向き直り」、つまり全社の目線を揃え直すこと。もう1つは「思い出づくり」、業務以外での交流を通じてチームの結束を強めることです。</p>
        
        <p>代表の栢森は合宿の冒頭で次のように語りました：</p>
        
        <blockquote>
          「日々の業務に追われていると、ついつい目の前のことだけに集中してしまいがちです。たまには立ち止まって、私たちが何のために働いているのか、どこに向かっているのかを確認し合う時間が必要です。また、仕事以外の場面でお互いを知ることで、より良いチームワークが生まれると信じています。」
        </blockquote>
        
        <h2>1日目：事業戦略の共有とディスカッション</h2>
        
        <p>合宿1日目は、京都駅近くのホテルの会議室を借りて行われました。午前中は各事業部からの現状報告と今後の戦略についてのプレゼンテーションが行われました。</p>
        
        <p>特に注目を集めたのは、新規事業部による「AI観光ガイド」プロジェクトの発表です。このプロジェクトは、訪日外国人向けに日本の文化や歴史を深く理解できるAIガイドを提供するもので、すでに京都市との実証実験が始まっています。</p>
        
        <p>午後からは、全社員がグループに分かれて「Newceの5年後のビジョン」についてディスカッションを行いました。各グループからは、「グローバル展開」「地方創生への貢献」「教育分野へのAI活用」など、様々なアイデアが出されました。</p>
        
        <h2>夜の部：京都の老舗料亭での懇親会</h2>
        
        <p>1日目の夜は、京都の老舗料亭「萬亀楼」を貸し切っての懇親会が開かれました。普段はあまり話す機会のない部署間のメンバーが交流し、和やかな雰囲気の中で京都の季節の料理を楽しみました。</p>
        
        <p>懇親会の中盤には「Newce Awards 2025」と題した表彰式も行われ、「最も成長した社員賞」「チームワーク賞」「イノベーション賞」など、様々な賞が贈られました。受賞者たちのスピーチは、笑いあり涙ありの感動的なものでした。</p>
        
        <h2>2日目：チームビルディングと京都観光</h2>
        
        <p>2日目は、嵐山エリアでのチームビルディングアクティビティから始まりました。「京都の謎を解け！」と題されたこのアクティビティでは、チームに分かれて嵐山エリアに隠された謎を解きながら、日本の伝統文化についても学ぶという内容でした。</p>
        
        <p>各チームは競い合いながらも協力し、最終的には全チームが見事に謎を解き明かすことができました。このアクティビティを通じて、普段はあまり関わりのないメンバー同士の絆が深まったようです。</p>
        
        <p>午後からは自由時間となり、各自が京都の観光を楽しみました。金閣寺や伏見稲荷大社を訪れるグループ、京都の老舗カフェでくつろぐグループなど、思い思いの時間を過ごしました。</p>
        
        <h2>参加者の声</h2>
        
        <p>合宿に参加した社員からは、次のような感想が寄せられました：</p>
        
        <div class="chat-bubble bg-gray-100 p-4 rounded-lg mb-4">
          <p class="font-bold">エンジニアリング部 田中さん：</p>
          <p>「普段はコードを書くことに集中していて、会社全体の方向性を考える機会はあまりありませんでした。今回の合宿で、自分の仕事が会社のビジョンにどう繋がっているのかを再確認できたのは大きな収穫です。」</p>
        </div>
        
        <div class="chat-bubble bg-gray-100 p-4 rounded-lg mb-4">
          <p class="font-bold">マーケティング部 佐藤さん：</p>
          <p>「チームビルディングアクティビティが特に楽しかったです！普段は別の部署の方とこんなに密に協力する機会はないので、新鮮でした。これからの業務でも、今回の経験を活かして部署間の連携をもっと強化していきたいと思います。」</p>
        </div>
        
        <div class="chat-bubble bg-gray-100 p-4 rounded-lg mb-4">
          <p class="font-bold">新入社員 山田さん：</p>
          <p>「入社して3ヶ月目で、まだ社内の人間関係に不安がありましたが、この合宿を通じて多くの先輩方と親しくなることができました。特に懇親会では、リラックスした雰囲気の中で先輩方のキャリアについての話を聞くことができ、とても参考になりました。」</p>
        </div>
        
        <h2>まとめ：繋がりを深めた2日間</h2>
        
        <p>2日間の合宿を通じて、Newceの社員たちは会社のビジョンを再確認し、同僚との繋がりを深めることができました。日常業務を離れ、異なる環境で過ごすことで生まれた新たな発見や気づきは、今後の会社の成長に大きく貢献することでしょう。</p>
        
        <p>代表の栢森は合宿の締めくくりに次のように述べました：</p>
        
        <blockquote>
          「この2日間で、私たちは単なる同僚以上の、一つのチームになれたと感じています。ここで生まれた絆と共有したビジョンを胸に、これからも革新的なサービスを生み出し続けていきましょう。」
        </blockquote>
        
        <p>次回の合宿は2025年夏に沖縄での開催が予定されています。どんな「向き直り」と「思い出づくり」が待っているのか、今から楽しみです。</p>
      </div>
    `,
  },
]

export default function BlogPostPage({ params }: { params: { id: string } }) {
  // Find the blog post data based on the ID parameter
  const postId = Number.parseInt(params.id)
  const blogPost = blogPostsData.find((post) => post.id === postId) || blogPostsData[0]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <article className="w-full">
          {/* Hero Section */}
          <div className="relative w-full h-[40vh] md:h-[60vh] overflow-hidden">
            <Image
              src={blogPost.heroImage || "/placeholder.svg"}
              alt={blogPost.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
              <div className="container px-4 md:px-6 py-12 md:py-24">
                <div className="max-w-3xl">
                  {/* Breadcrumb navigation */}
                  <div className="text-sm mb-4 text-white">
                    <Link href="/" className="hover:underline">
                      Home
                    </Link>
                    <span className="mx-1">・</span>
                    <Link href="/news" className="hover:underline">
                      Blog
                    </Link>
                    <span className="mx-1">・</span>
                    <span>Article</span>
                  </div>
                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{blogPost.title}</h1>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blogPost.categories.map((category) => (
                      <span key={category} className="text-xs bg-white bg-opacity-20 text-white px-3 py-1 rounded-full">
                        {category}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                      {blogPost.authors.map((author, index) => (
                        <div
                          key={index}
                          className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                        >
                          <Image
                            src={author.image || "/placeholder.svg"}
                            alt={author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="text-white">
                      <div className="text-sm font-medium">{blogPost.authors.map((a) => a.name).join(" & ")}</div>
                      <div className="text-xs opacity-80">2024年12月12日</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Content */}
          <div className="container px-4 md:px-6 py-12">
            <div className="max-w-3xl mx-auto">
              <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />

              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold mb-4">著者について</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {blogPost.authors.map((author, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-100">
                        <Image
                          src={author.image || "/placeholder.svg"}
                          alt={author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">{author.name}</h4>
                        <p className="text-sm text-gray-600">{author.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <Link href="/news" className="inline-flex items-center text-blue-600 hover:underline">
                  ← ブログ一覧に戻る
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Scrolling Banner */}
        <ScrollingBanner />
      </main>
      <Footer />
    </div>
  )
}
