import PropTypes from 'prop-types'


function Item({carro, ano_lancamento}){
    return(
        <>
         <li>{carro} - {ano_lancamento}</li>
        </>
    )
}

//defino os tipos dos props
Item.propTypes = {
    carro: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.isRequired
}

//defino props com valor default caso eles não tenham sido preenchidos
Item.defaultProps = {
    carro: 'Carro não foi passado',
    ano_lancamento: 0,

}


export default Item