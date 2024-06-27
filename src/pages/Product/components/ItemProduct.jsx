import { IconHeart } from '@tabler/icons-react'
import { Component } from 'react'
import PropTypes from 'prop-types'
import { IconShoppingCart } from '@tabler/icons-react'
import { IconHeartFilled } from '@tabler/icons-react'

class ItemProduct extends Component {

  // constructor(props){
  //   super(props)

  //   // this.handleDecrement = this.handleDecrement.bind(this)
  //   // this.handleIncrement = this.handleIncrement.bind(this)
  // }

  state = {
    count: 0,
    like: false,
  }

  handleLike = () => {
    this.setState({
      like: !this.state.like
    }, () => {
      this.props.changeSavedCount(this.state.like === true ? 1 : -1)
    })
  }


  handleIncrement= () => { // menjadikan method sebuah anonymous function sama seperti binding function (mengikat function dengan kelasnya sendiri)
    this.setState({
      count: this.state.count + 1
   } )
  }

  handleDecrement= () => { // menjadikan method sebuah anonymous function sama seperti binding function (mengikat function dengan kelasnya sendiri)
    this.setState({
      count: this.state.count - 1
   } )
  }
  
  // React Life Cycle

  constructor(props){
    super(props)

    // this.handleDecrement = this.handleDecrement.bind(this)
    // this.handleIncrement = this.handleIncrement.bind(this)
    console.log("Called from constructor")
  }

  componentDidMount() { // ambil data API lewat sini
    console.log("Called from didmount")
  }

  componentDidUpdate() {
    console.log("Called from update")

  }

  componentWillUnmount() {
    console.log("Called from willUnmount")    
  }

  

  render() {
    console.log("Called from render")
    const { image, title, price} = this.props
    return (
      <div className='card shadow-sm h-100'>
        {/* <img src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//98/MTA-10906782/beng-beng_beng-beng-coklat-wafer-20g_full01.jpg" alt="bengbeng" className="card-img-top h-50 object-fit-contain" /> */}
        <img 
        src={image} 
        alt={title} 
        className="card-img-top h-50 object-fit-contain" />
        <div className="card-body">
          <h5 className="card-title fw-light">{title}</h5>
          <p className="fw-bold">Rp. {price}</p>
        </div>
        {/* .d-flex.justify-content-between.p-2>.d-flex.align-items-center.justify-content-start.column-gap-4>button.d-flex.align-items-center.column-gap-2.btn.btn-primary{Tambah Keranjang}+button.btn.btn-primary{-}+span{0}+button.btn.btn-primary{+}^button.btn.btn-link>i{<IconHeart />} */}
        <div className="d-flex justify-content-between p-2">
          <div className="d-flex align-items-center justify-content-start column-gap-4">
            {/* perkondisian untuk button  */}
            {this.state.count === 0 ? 
            <button
            onClick={this.handleIncrement}
            className="d-flex align-items-center column-gap-2 btn btn-primary"
          >
            <IconShoppingCart />
            Tambah Keranjang WOY!!!
          </button>
            
            :
            <>
            <button
            onClick={this.handleDecrement}
            className="btn btn-primary"
          >
            -
          </button>
          <span>{this.state.count}</span>
          <button
            onClick={this.handleIncrement}
            className="btn btn-primary"
          >
            +
          </button>
          </>
        }
            {/* <button
              className="d-flex align-items-center column-gap-2 btn btn-primary"
            >
              Tambah Keranjang
            </button>
            <button
              onClick={this.handleDecrement}
              className="btn btn-primary"
            >
              -
            </button>
            <span>{this.state.count}</span>
            <button
              onClick={this.handleIncrement}
              className="btn btn-primary"
            >
              +
            </button> */}
          </div>
          <button
          onClick={this.handleLike}
            className="btn btn-link"
          >
            <i>
              {this.state.like === true ? <IconHeartFilled/>: <IconHeart/>}
              {/* <IconHeart /> */}
            </i>
          </button>
        </div>
      </div>
    )
  }
}

export default ItemProduct

ItemProduct.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    changeSavedCount: PropTypes.func,
}
