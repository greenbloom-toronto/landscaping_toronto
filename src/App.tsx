import { useEffect, useState } from 'react';
import './App.css';
import { DesktopLayout } from './Layouts/DesktopLayout';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Header } from './Layouts/Header';
import { QuoteRequestForm } from './Layouts/FormSection';
import { Footer } from './Layouts/Footer/Footer';
import ServicePage from './Layouts/ServicePage';
import { FAQPage } from './Layouts/FAQPage';
// import { servicesList } from './resources/data/arrays';
// import { useOpenQuoteDialog } from './Storages/useOpenQuoteDialog';
// import { QuoteDialog } from './Layouts/Dialogs/QuoteDialog/QuoteDialog';
// import { FAQPage } from './Layouts/FAQPage/FAQPage';
// import { CustomLoader } from './Layouts/Loader/Loader';

function App() {
  const location = useLocation()

  // const { setVisibleService } = useSerivcePageDataStorage()

  // useEffect(() => {
  //   if (location.pathname.includes('services')) {
  //     setVisibleService(servicesList[0].id)
  //   }
  // }, [location, setVisibleService]);

  // const { openQuoteDialog, setOpenQuoteDialog } = useOpenQuoteDialog()

  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 4000)
  // }, [])
  // if (loading) {
  //   return <CustomLoader />
  // }

  return (
    <div className="App">
      {/* <AppHeader /> */}
      <Header />
      <Routes>
        <Route path='/' element={<DesktopLayout />} />
        {/* <Route path='/faq-page' element={<FAQPage />} /> */}
        {/* <Route
          path={
            '/services'
          }
          element={<ServicePage />}
        /> */}
        <Route path="/services/*" element={<ServicePage />} />
        <Route path="/faq-page" element={<FAQPage />} />
      </Routes>
      <QuoteRequestForm />
      <Footer />
      {/* {openQuoteDialog && (
        <QuoteDialog
          open={openQuoteDialog}
          onClose={() => setOpenQuoteDialog(false)}
        />
      )} */}
    </div>
  );
}

export default App;
