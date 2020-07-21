import {email, required, minLength} from 'vuelidate/lib/validators'
import messages from '@/utils/messages.js'

export default {
  name: 'auth',
  data: () => ({
    email: '',
    password: '',
  }),
  validations: {
    email: {email, required},
    password: {required, minLength: minLength(6)},
  },
  mounted() {
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message])
    }
  },
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      const formData = {
        email: this.email,
        password: this.password,
      }

      console.log(formData)
      this.$router.push('/')
    }
  },
}
