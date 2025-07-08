<template>
  <div class="blog-home">
    <div class="top-bg">
      <div class="intro-main">
        <div class="intro-name-gradient">张宇</div>
        <span class="role-badge gradient">前端开发工程师</span>
      </div>
    </div>
    <div class="intro-card redesigned-intro">
      <p class="intro-quote">“接触前端时候还是上大学的时候，那时候前端可以绘制完页面直接从浏览器打开就能看见，一到节日就深受欢迎。当然现在看来这些动画确实很low，接触后端是因为第一家公司招的是前端但是其实做的最多是后端。”</p>
      <p class="blog-birth">出生于 2001年7月22日</p>
    </div>
    <div class="hobby-card redesigned-intro">
      <h3 class="hobby-title">兴趣爱好</h3>
      <p class="hobby-desc">最近迷上路亚，没事的时候就喜欢出去抛几杆，这运动真的很上瘾。现在天气热了开始晚上去钓，不管钓没钓到都喜欢去，一点不会磨灭我的热情。</p>
      <div class="hobby-photos">
        <img v-for="src in fishPhotos" :key="src" :src="require(`@/assets/${src}`)" class="hobby-photo" alt="鱼获照片" />
      </div>
    </div>
    <main class="blog-main">
      <section class="blog-timeline">
        <div class="timeline-item bright">
          <div class="timeline-dot glow"></div>
          <div class="timeline-content">
            <div class="timeline-meta">
              <span class="timeline-date blue-label">2023.04</span>
              <span class="timeline-company orange-label">南京轩瑞网络科技有限公司</span>
            </div>
            <h2 class="timeline-title">初入职场：前端到全栈的转变</h2>
            <div class="timeline-desc">
              <p>第一家公司叫南京轩瑞网络科技有限公司，我是23年四月份入的职。同批入住还有一个小伙伴比我早来一个星期。我来的时候加上我一共三个人。两个前端老板一个人后端，可能因为我们确实年轻做的快不会摸鱼，我们一般都是在等老板接口，加上老板已经五十多岁左右了。看我们闲的问我们考不考虑做后端。之后在一个星期后的某一天下班，他被老板叫过去问一下项目的事当时我也没在意平时也会这样，第二天我就看见他位置空了。我也没多想我以为他请假，直到老板跟我说他自己离职的我就知道他不愿意接触。之后只能我开始摸索了，虽然说在学校学过java但是你懂吧，哈哈哈哈。那时候直接给我一个项目教我怎么装环境下ideal运行项目。这时候我才接触到若依这个框架，现在看来若依确实很方便管理开发。那时候要处理一个错误问题，阅卷的时候报错。实不相瞒我看了三天没看见怎么报错的。之后下班的时候老板坐我旁边告诉我一步步是怎么执行的。三个小时解决了。之后就开始各种写接口，都是看着之前接口怎么写仿着写，当时我也不知道结构是什么。我只知道这个地方就是应该写什么。虽然写的都是增删改查。但是确实让我很快熟悉了这个若依。</p>
              <p>接着我发现自从我把刚来的着手的页面写完基本上就没有前端工作了，每天都是ideal在工作。老板就直接写对接摄像头以及ai算法工作。其余的都在我这边。想想那时候虽然压力大天天内耗但确实学的东西挺多。从增删改查写到一些算法虽然也不是很牛的算法。但是确实蛮骄傲的。其中有一个我记忆特别清楚，因为就是写完这个我就跟这个公司拜拜了。老板跟我说，要写一个全市考试每个区县要去指定地方去考试，考生要随机分配到每个考场每个时间段并且每个科目不能在同一时间段还有一些其他限制规则记不太清了。给我愁坏了，一开始确实简单但是加上限制之后每次都会有一些考试不符合规则就筛选出来，之后我等把这些考生筛选出来之后又跟已经安排好的考生做替换前提是替换的时候两个考生都满足限制条件，写了两三天终于调试出来。之后因为没有测试都是我们自己测试，但是换个真实数据报了个错。痛失我1000块。之后调试好之后，我发现工作量越来越好让我绘制一个电商网站我就知道估计时间呆不长了。果然一个星期网站画好之后跟我说公司经营不善什么的。我知道是因为项目快结束了没有项目做了。说了一些冠冕堂皇的话之后就离开了。虽然在这天天内耗但是确实每天都蛮充实的。</p>
              <p>虽然说不能算上严格意义上的全栈，但是让我了解后端java这个技术，能够独立去写接口、去解决报错，可以用若依快速进行前后端开发我就已经很满足了。</p>
            </div>
          </div>
        </div>
        <div class="timeline-item bright">
          <div class="timeline-dot glow"></div>
          <div class="timeline-content">
            <div class="timeline-meta">
              <span class="timeline-date green-label">2024.04</span>
              <span class="timeline-company purple-label">新公司入职</span>
            </div>
            <h2 class="timeline-title">离职后的迷茫与新起点</h2>
            <div class="timeline-desc">
              <p>离职之后我天天愁奥，一边愁一边面试，保证一天至少有一个面试，晚上天天跑玄武湖散心。当面试现在这家公司的时候我其实内心特别想来，不仅条件让我很心动，主要我感觉公司氛围特别好。面试完之后我就一直在等，之后我去另一家面试，早上通知我去机试并没有问我一下甲骨文，直接让我上手写一个功能。写完之后刚下来人事就打电话给我问我有没有时间来试工，说老板看我一直在那边埋头做还不错。之后我以为我现在这家没希望了，我就先去这家了。还好人事忙没签合同，到清明节放假前一天人事突然打电话给我说我录取了。那时候我别提多高兴了但是我又不知道怎么跟这家公司说。斗争了一上午跟人事聊了聊，之后正常离开。回家放了一个清明节入职新公司。</p>
            </div>
          </div>
        </div>
        <div class="timeline-item bright">
          <div class="timeline-dot glow"></div>
          <div class="timeline-content">
            <div class="timeline-meta">
              <span class="timeline-date orange-label">2024.04-至今</span>
              <span class="timeline-company blue-label">南京智神星网络科技有限公司</span>
            </div>
            <h2 class="timeline-title">多元项目与全栈成长</h2>
            <div class="timeline-desc">
              <p>入职之后公司是做美国的一个项目，我就用Bxxx（涉及私密）。我跟前面一个前端交接的时候，已经是处于优化阶段。都是天天改bug，改界面。这个阶段都是前端的工作，所以上手比较快。就是这个项目写的我属实有点乱。有的页面我实在不好改我就直接重构了。可能上一家ruoyi用久了，他这个框架里面的代码我看着像angular的ui组件但是也有element-ui。用的技术栈还是vue。</p>
              <p>之后开始做一些政府的疾控项目以及恶劣天气预报平台。也是接触到了后端,前后端开发。之后接了个政府的内部的一个文件审查项目。也是做了前后端展示的工作，虽然没有直接参与，但是也了解到Python算法以及服务器一些知识。</p>
              <p>之后给新西兰一家公司写了一个官网，这时候我发现了cursor，之前就知道只是之前有额度不知道为什么上次破解了一下现在完全免费了，他们不愿意买邮件电话服务。我就写了一个增查的功能去查看用户留言。并且学着把前后端上传到服务器上去并设置了域名。</p>
              <p>之后美国那边要将qt的一个项目用vue重构。了解了一下qt，就开始绘制h5页面。并且连接qt信号调试接口。</p>
              <p>因为没有接口文档，我接触到了x-shell。先在旧项目上进行操作，再从x-shell上看对应的接口，然后看一下后端接口是怎么写的，进行调试。</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      fishPhotos: [
        '340e3697d57f1b7f949ab30ad032f76a.jpg',
        'fe0772ff671b5a3501ba849fd194df2e.jpg',
        '0f9f2fb86ac5adf57fcc60877a0331f3.jpg',
        '5ef1c6fe6dd67b3d676accf9072acb27.jpg',
      ]
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.blog-home {
  min-height: 100vh;
  background: linear-gradient(120deg, #f6f8fa 60%, #e3e8ee 100%);
  font-family: 'Roboto', Arial, sans-serif;
}
.bright-bg {
  background: linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%);
  border-radius: 0 0 32px 32px;
  box-shadow: 0 4px 24px rgba(59,130,246,0.08);
  padding-bottom: 2.5rem;
}
.blog-header {
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 1rem 1.5rem 1rem;
  text-align: center;
  color: #fff;
  position: relative;
}
.blog-title {
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 0.5rem;
  font-weight: 700;
  letter-spacing: 2px;
}
.role-badge.gradient {
  background: linear-gradient(90deg, #60a5fa 0%, #3b82f6 100%);
  color: #fff;
  font-size: 1.1rem;
  padding: 0.2em 1em;
  border-radius: 1em;
  font-weight: bold;
  margin-left: 0.7em;
  letter-spacing: 1px;
  box-shadow: 0 2px 8px rgba(59,130,246,0.12);
}
.blog-intro {
  color: #e0e7ef;
  margin-bottom: 0.5rem;
  font-size: 1.15rem;
}
.blog-birth {
  color: #c7d2fe;
  font-size: 1rem;
}
.blog-hobbies {
  margin-top: 1.2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  justify-content: center;
}
.hobby-tag {
  display: inline-block;
  padding: 0.35em 1.1em;
  border-radius: 1em;
  font-size: 1rem;
  font-weight: 500;
  background: #fff;
  color: #3b82f6;
  box-shadow: 0 1px 6px rgba(59,130,246,0.08);
  transition: background 0.2s, color 0.2s;
}
.hobby-tag.blue { background: #3b82f6; color: #fff; }
.hobby-tag.green { background: #22c55e; color: #fff; }
.hobby-tag.orange { background: #f59e42; color: #fff; }
.hobby-tag.purple { background: #a78bfa; color: #fff; }
.hobby-tag.gray { background: #64748b; color: #fff; }

.blog-main {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem 2rem 1rem;
}
.blog-timeline {
  position: relative;
  margin-top: 2.5rem;
  padding-left: 2.5rem;
  border-left: 5px solid #60a5fa;
  background: rgba(255,255,255,0.7);
  border-radius: 18px;
  box-shadow: 0 2px 16px rgba(59,130,246,0.06);
}
.timeline-item.bright {
  position: relative;
  margin-bottom: 3rem;
}
.timeline-dot.glow {
  position: absolute;
  left: -2.1rem;
  top: 1.2rem;
  width: 1.5rem;
  height: 1.5rem;
  background: linear-gradient(135deg, #3b82f6 60%, #60a5fa 100%);
  border-radius: 50%;
  box-shadow: 0 0 0 6px #dbeafe, 0 0 16px #60a5fa;
  border: 4px solid #fff;
  z-index: 2;
}
.timeline-content {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(30, 34, 40, 0.09);
  padding: 1.7rem 2.2rem;
  margin-left: 0.5rem;
  border-left: 6px solid #3b82f6;
  position: relative;
  transition: box-shadow 0.2s, transform 0.2s;
}
.timeline-content:hover {
  box-shadow: 0 6px 24px rgba(59,130,246,0.13);
  transform: translateY(-2px) scale(1.01);
}
.timeline-meta {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-size: 1.05rem;
  margin-bottom: 0.5rem;
}
.timeline-date, .timeline-company {
  display: inline-block;
  padding: 0.18em 0.8em;
  border-radius: 1em;
  font-weight: 600;
  font-size: 1rem;
}
.blue-label { background: #3b82f6; color: #fff; }
.green-label { background: #22c55e; color: #fff; }
.orange-label { background: #f59e42; color: #fff; }
.purple-label { background: #a78bfa; color: #fff; }
.timeline-title {
  font-size: 1.3rem;
  color: #222;
  margin-bottom: 0.7rem;
  font-weight: 700;
}
.timeline-desc p {
  color: #4b5563;
  line-height: 1.8;
  margin-bottom: 0.7rem;
}
@media (max-width: 700px) {
  .blog-header, .blog-main {
    padding-left: 0.3rem;
    padding-right: 0.3rem;
  }
  .timeline-content {
    padding: 1rem 0.7rem;
  }
  .blog-title {
    font-size: 1.3rem;
  }
  .blog-timeline {
    padding-left: 1.1rem;
  }
  .timeline-dot.glow {
    left: -1.1rem;
    top: 1.1rem;
    width: 1.1rem;
    height: 1.1rem;
    box-shadow: 0 0 0 3px #dbeafe, 0 0 8px #60a5fa;
  }
}
.lure-card {
  background: linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%);
  color: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(59,130,246,0.13);
  padding: 1.1rem 1.5rem 1.1rem 1.5rem;
  margin-bottom: 1.1rem;
  display: inline-block;
  min-width: 220px;
  max-width: 100%;
  text-align: left;
}
.lure-title {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
  letter-spacing: 1px;
}
.lure-desc {
  font-size: 1rem;
  line-height: 1.7;
}
.intro-hobby-wrapper {
  display: flex;
  gap: 2.2rem;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto 2.5rem auto;
  max-width: 900px;
  flex-wrap: wrap;
}
.intro-card {
  text-align: left;
}
@media (max-width: 900px) {
  .intro-hobby-wrapper {
    flex-direction: column;
    gap: 1.2rem;
    align-items: stretch;
  }
  .intro-card {
    max-width: 100%;
    min-width: 0;
    margin-top: -2.5rem;
  }
}
.redesigned-intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 22px;
  box-shadow: 0 4px 24px rgba(59,130,246,0.10);
  padding: 2.5rem 2.5rem 2rem 2.5rem;
  margin-bottom: 1.5rem;
}
.intro-name-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.2rem;
}
.intro-name-gradient {
  font-size: 2.7rem;
  font-weight: 800;
  background: linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  letter-spacing: 3px;
  margin-bottom: 0.3rem;
}
.role-badge.gradient {
  background: linear-gradient(90deg, #60a5fa 0%, #3b82f6 100%);
  color: #fff;
  font-size: 1.1rem;
  padding: 0.2em 1em;
  border-radius: 1em;
  font-weight: bold;
  margin-left: 0.7em;
  letter-spacing: 1px;
  box-shadow: 0 2px 8px rgba(59,130,246,0.12);
}
.intro-desc-block {
  text-align: center;
}
.intro-quote {
  font-size: 1.15rem;
  color: #4b5563;
  font-style: italic;
  margin-bottom: 0.7rem;
  line-height: 1.8;
  background: #f1f5fd;
  border-radius: 10px;
  padding: 1.1rem 1.2rem;
  display: inline-block;
}
.top-bg {
  width: 100%;
  min-height: 180px;
  background: linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%);
  border-radius: 0 0 36px 36px;
  box-shadow: 0 4px 24px rgba(59,130,246,0.10);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 2.2rem;
}
.intro-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.intro-name-gradient {
  font-size: 2.8rem;
  font-weight: 800;
  background: linear-gradient(90deg, #fff 0%, #dbeafe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  letter-spacing: 3px;
  margin-bottom: 0.3rem;
  text-shadow: 0 2px 8px rgba(59,130,246,0.10);
}
.role-badge.gradient {
  background: linear-gradient(90deg, #60a5fa 0%, #3b82f6 100%);
  color: #fff;
  font-size: 1.1rem;
  padding: 0.2em 1em;
  border-radius: 1em;
  font-weight: bold;
  margin-left: 0.7em;
  letter-spacing: 1px;
  box-shadow: 0 2px 8px rgba(59,130,246,0.12);
}
.intro-card.redesigned-intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 22px;
  box-shadow: 0 4px 24px rgba(59,130,246,0.10);
  padding: 2.5rem 2.5rem 2rem 2.5rem;
  margin: -3.5rem auto 1.5rem auto;
  max-width: 520px;
}
.intro-desc-block {
  text-align: center;
}
.intro-quote {
  font-size: 1.15rem;
  color: #4b5563;
  font-style: italic;
  margin-bottom: 0.7rem;
  line-height: 1.8;
  background: #f1f5fd;
  border-radius: 10px;
  padding: 1.1rem 1.2rem;
  display: inline-block;
}
@media (max-width: 700px) {
  .top-bg {
    min-height: 120px;
    padding-bottom: 1.2rem;
    border-radius: 0 0 18px 18px;
  }
  .intro-card.redesigned-intro {
    padding: 1.2rem 0.7rem 1.2rem 0.7rem;
    max-width: 98vw;
    margin: -2.2rem auto 1.2rem auto;
  }
  .intro-name-gradient {
    font-size: 1.5rem;
  }
}
.hobby-card.redesigned-intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 22px;
  box-shadow: 0 4px 24px rgba(59,130,246,0.10);
  padding: 2.2rem 2.2rem 1.5rem 2.2rem;
  margin: 0 auto 1.5rem auto;
  max-width: 520px;
}
.hobby-title {
  font-size: 1.18rem;
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 1rem;
  letter-spacing: 1px;
}
.hobby-desc {
  font-size: 1.08rem;
  color: #4b5563;
  line-height: 1.8;
  text-align: center;
}
.hobby-photos {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 1.2rem;
}
.hobby-photo {
  width: 140px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(59,130,246,0.10);
  background: #f1f5fd;
}
</style> 