import Navbar from '@/components/Navbar/Navbar.vue'
import Sidebar from '@/components/Sidebar/Sidebar.vue'
import FixedButton from '@/components/FixedButton.vue'

export default {
  name: 'mainLayout',
  data: () => ({
    isOpen: true,
  }),
  components: {
    Navbar, Sidebar, FixedButton
  },
}
