import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Appku from '../components/Main/Appku/Appku'
import Dashboard from '../components/Main/Dashboard/Dashboard'
import Frequently from '../components/Main/Frequenty/Frequently'
import GetItTouch from '../components/Main/GetItTouch/GetItTouch'
import SimilarSections from '../components/Main/SimilarSections/SimilarSections'
import Software from '../components/Main/Software/Software'
import Testimonials from '../components/Main/Testimonials/Testimonials'
import Traders from '../components/Main/Traders/Traders'

import styles from './styles.module.scss'

export default function TraderPal() {
  return (
    <>
      <div className={styles.bg}>
        <div className={styles.body}>
          <Header />
          <Dashboard />
        </div>
        <div className={styles.containers}>
          <Traders />
          <Appku />
          <SimilarSections />
          <Software />
          <Frequently />
          <Testimonials />
          <GetItTouch />
          <Footer />
        </div>
      </div>
    </>
  )
}