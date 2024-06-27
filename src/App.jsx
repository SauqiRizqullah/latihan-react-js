import React from 'react';
import Home from '@/pages/Home/Home';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import Login from './pages/Authentication/Login';
import Product from './pages/Product/Product'
import Register from './pages/Authentication/Register'
import Lifecycle from './pages/Lifecycle/Lifecycle';

class App extends React.Component{ // menambah extend react component karena react

  state = {
    page: <Lifecycle />
  }
  handlePages = (page) => {
    // console.log("🚀 ~ App ~ event:", event)
    this.setState({
      page: page
    })
  }


  

  render(){ // metode dari react component
    return (
      <>

      {/* <Lifecycle /> */}
      <button onClick={() => this.handlePages(<Lifecycle />)}>Show Lifecycle</button>
        {/* <Home /> */}
        <button onClick={() => this.setState({ page: <Home /> })}>Show Home</button>
        {/* <Register /> */}
        <button onClick={() => this.setState({ page: <Register /> })}>Show Register</button>
        {/* <Login /> */}
        <button onClick={() => this.setState({ page: <Login /> })}>Show Login</button>
        {/* <Product /> */}
        <button onClick={() => this.setState({ page: <Product /> })}>Show Product</button>
        {/* <Toasts /> */}
        <button onClick={() => this.setState({ page: <Toasts /> })}>Show Toasts</button>
        {this.state.page}

      </>
    )
  }
}

// cek apakah bootstrap bekerja dengan function component
function Toasts(){

  // 2. Buat reaksi button

  const showToast = () => {
    const toastLiveExample = document.getElementById('liveToast')
    const toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
  }

  // 1. Buat ikon button
  // 3. onclick panggil show Toast (fungsi anonymous)
  return(
    <>
    <button onClick={showToast}type="button" className="btn btn-primary" id="liveToastBtn">Show live toast</button>

<div className="toast-container position-fixed bottom-0 end-0 p-3">
  <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div className="toast-header">
      <img src="..." className="rounded me-2" alt="..."/>
      <strong className="me-auto">Bootstrap</strong>
      <small>11 mins ago</small>
      <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div className="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
</div>
    </>
  )
}

export default App