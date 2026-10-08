const Inline = () => {
    let stylesForPara={
        color:"yellow",
        backgroundColor:"Red",
    }
    let stylesForBtn={
        color:"green",
        backgroundColor:"blue"
    }

  return (
    <div>
        <h1 style={{color:'white',backgroundColor:"red",textAlign:"center"}}> Happy janma Hastami </h1>
        
        
        <p style={stylesForPara}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate, provident suscipit aspernatur iusto, delectus cumque quibusdam et nisi fuga natus adipisci doloribus cum illo minima, libero nam! Inventore, repudiandae?
        Nam unde facilis, laboriosam aliquam doloremque libero nemo accusantium minus obcaecati rem temporibus dolorum voluptate. Velit laudantium, consequatur commodi vero nihil repudiandae iste nesciunt nemo quas aperiam. Neque, deserunt voluptatibus!
        Quaerat expedita repellat excepturi consequuntur minima, amet dolores deleniti ex. Et aut error nostrum architecto eos placeat, numquam nesciunt dolor nisi aspernatur voluptate mollitia, quaerat, corporis nam. Cupiditate, amet in.
        Dignissimos nemo laudantium commodi veritatis adipisci a dolor natus id pariatur eveniet molestias, ipsa ea, esse doloribus facere similique. Cumque velit recusandae doloremque unde cupiditate repudiandae tempora quibusdam nostrum enim!
        Architecto quibusdam culpa, error minima saepe, corrupti atque cum in dolorum perspiciatis impedit? Veniam quisquam quasi, soluta sed magnam nulla nesciunt dolore molestias odio odit suscipit exercitationem sapiente obcaecati dolorum </p>
        <button styles ={stylesForBtn}> Click </button>
    </div>
  )
}

export default Inline