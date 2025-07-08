<template>
  <div class="work-blog">
    <div class="container">
      <h1>工作经历</h1>
      <p class="subtitle">我的职业发展与成长</p>
      <div class="timeline">
        <div v-for="(job, index) in workExperience" :key="index" class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="job-header">
              <h2>{{ job.title }}</h2>
              <div class="company-info">
                <span class="company">{{ job.company }}</span>
                <span class="location">{{ job.location }}</span>
              </div>
              <div class="period">
                <span>{{ job.startDate }} - {{ job.endDate || '至今' }}</span>
                <span class="duration">{{ job.duration }}</span>
              </div>
            </div>
            <div class="job-description">
              <p>{{ job.description }}</p>
            </div>
            <div class="responsibilities">
              <h4>主要职责</h4>
              <ul>
                <li v-for="(r, i) in job.responsibilities" :key="i">{{ r }}</li>
              </ul>
            </div>
            <div class="achievements" v-if="job.achievements && job.achievements.length">
              <h4>主要成就</h4>
              <ul>
                <li v-for="(a, i) in job.achievements" :key="i">{{ a }}</li>
              </ul>
            </div>
            <div class="skills" v-if="job.skills && job.skills.length">
              <h4>使用技术</h4>
              <div class="skill-tags">
                <span v-for="(s, i) in job.skills" :key="i" class="skill-tag">{{ s }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkExperienceBlog',
  data() {
    return {
      workExperience: [
        {
          title: '前端开发工程师',
          company: '示例公司A',
          location: '北京',
          startDate: '2023年3月',
          endDate: '2024年12月',
          duration: '1年9个月',
          description: '负责公司核心产品的前端开发工作，参与产品需求分析和技术方案设计。',
          responsibilities: [
            '负责公司主要产品的前端界面开发和维护',
            '与产品经理和设计师协作，优化用户体验',
            '参与技术选型和架构设计讨论',
            '指导初级开发人员，进行代码审查'
          ],
          achievements: [
            '优化了产品加载速度，提升了30%的用户体验',
            '重构了核心模块，减少了50%的代码重复',
            '获得了年度最佳员工奖'
          ],
          skills: ['Vue.js', 'React', 'TypeScript', 'Webpack', 'Git']
        },
        {
          title: '全栈开发工程师',
          company: '示例公司B',
          location: '上海',
          startDate: '2021年6月',
          endDate: '2023年2月',
          duration: '1年8个月',
          description: '负责公司多个项目的全栈开发，从前端到后端，从数据库设计到部署运维。',
          responsibilities: [
            '独立完成多个项目的全栈开发工作',
            '设计并实现数据库结构和API接口',
            '负责项目的部署和运维工作',
            '编写技术文档和用户手册'
          ],
          achievements: [
            '成功交付了5个重要项目，客户满意度达95%',
            '建立了公司的开发规范和最佳实践',
            '培训了3名新员工，提升了团队整体技术水平'
          ],
          skills: ['JavaScript', 'Node.js', 'Python', 'MySQL', 'Docker', 'AWS']
        }
      ]
    }
  }
}
</script>

<style scoped>
.work-blog {
  background: #f8fafc;
  min-height: 100vh;
  padding: 2rem 0;
}
.container {
  max-width: 900px;
  margin: 0 auto;
}
h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
}
.subtitle {
  text-align: center;
  color: #7f8c8d;
  font-size: 1.2rem;
  margin-bottom: 3rem;
}
.timeline {
  position: relative;
  margin: 2rem 0;
  padding-left: 30px;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 0;
  bottom: 0;
  width: 4px;
  background: #3498db;
  border-radius: 2px;
}
.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  display: flex;
  align-items: flex-start;
}
.timeline-dot {
  position: absolute;
  left: 7px;
  top: 32px;
  width: 16px;
  height: 16px;
  background: #fff;
  border: 4px solid #3498db;
  border-radius: 50%;
  z-index: 1;
}
.timeline-content {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  padding: 2rem;
  margin-left: 40px;
  flex: 1;
  position: relative;
}
.job-header {
  margin-bottom: 1rem;
}
.job-header h2 {
  color: #2c3e50;
  margin-bottom: 0.3rem;
  font-size: 1.4rem;
}
.company-info {
  color: #3498db;
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
}
.location {
  color: #7f8c8d;
  font-size: 0.95rem;
  margin-left: 1rem;
}
.period {
  color: #888;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
}
.duration {
  background: #e8f4fd;
  color: #3498db;
  padding: 0.2rem 0.7rem;
  border-radius: 12px;
  font-size: 0.85rem;
  margin-left: 0.5rem;
}
.job-description {
  margin-bottom: 1rem;
  color: #7f8c8d;
}
.responsibilities, .achievements {
  margin-bottom: 1rem;
}
.responsibilities h4, .achievements h4, .skills h4 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.05rem;
}
.responsibilities ul, .achievements ul {
  list-style: none;
  padding-left: 0;
}
.responsibilities li, .achievements li {
  color: #7f8c8d;
  margin-bottom: 0.3rem;
  padding-left: 1.2rem;
  position: relative;
}
.responsibilities li::before, .achievements li::before {
  content: '•';
  color: #3498db;
  position: absolute;
  left: 0;
  font-weight: bold;
}
.skills {
  margin-bottom: 0.5rem;
}
.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.skill-tag {
  background: #f0f8ff;
  color: #3498db;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.85rem;
  border: 1px solid #e1f0ff;
}
@media (max-width: 600px) {
  .timeline-content {
    padding: 1rem;
  }
  .container {
    padding: 0 0.5rem;
  }
}
</style> 