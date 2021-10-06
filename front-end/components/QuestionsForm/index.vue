<template>
	<div class="form-section">
		<div class="wrap question-form">
			<progress-bar :max="questions.length" :currentProgress="currentQuestion" />

			<div class="form-content">
				<h2>Otázka č.{{ currentQuestion + 1 }}</h2>
				<h1>{{ questions[currentQuestion].title }}</h1>

				<div class="form-data">
					<form-options :options="questions[currentQuestion].options" @optionClicked="optionClicked" />
				</div>

				<p>
					Po vyplnení krátkeho dotáznika vám navrhneme zoznam neziskových organizácií, ktoré by vás mohli zaujímať.
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import FormOption from './FormOption.vue'
import FormOptions from './FormOptions.vue'

import questions from "../../rawData"
import ChangeQuestionArrow from './ChangeQuestionArrow.vue'
import ProgressBar from './ProgressBar.vue'

export default {
  components: { FormOption, FormOptions, ChangeQuestionArrow, ProgressBar },
	name: "QuestionsForm",
	computed: {
		questions() {
			return questions
		}
	},
	data() {
		return {
			currentQuestion: 0
		}
	},
	methods: {
		optionClicked(id) {
			this.nextQuestion()
		},
		nextQuestion() {
			console.log("Next");
			this.currentQuestion = this.currentQuestion + 1;
		}
	}
}
</script>

<style lang="sass" scoped>
.form-section
  margin-bottom: 1em
  min-height: calc(100vh - 9em)
.question-form
  width: 60%
  min-height: 40em
  background: rgb(255,255,255)
  background: linear-gradient(140deg, rgba(255,255,255,1) 51%, rgba(255,246,255,1) 100%)
  color: #222
  border-radius: 0 0 0.9em 0.9em
  box-shadow: 0px 3px 15px rgba(0,0,0,0.2)
  margin-top: 3em
  h1
    text-align: center
    font-size: 3.1em
    margin-bottom: 1em
  h2
    text-align: center
    text-transform: uppercase
    font-size: 0.9em
    color: #444
  p
    text-align: center
    margin: 5em auto 1em
    font-size: 1.3em
    width: 80%
    color: #888
.form-data
  display: flex
  justify-content: center
.form-content
  padding: 4em 4em 0.5em 4em
</style>
