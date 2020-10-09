import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
	outline: 0;
  box-sizing: border-box;
}

body {
  color: #fff;
  background-color: #312E38;
	-webkit-font-smoothing: antialiased;
}

body, input, button{
  font-size: 16px;
  font-family: 'Roboto Slab', serif;
}

a{
  text-decoration: none;
}

button {
  border: 0;
  background: none;
	cursor: pointer;
}

ul{
  list-style: none;
  padding-left: 0;
}

h1,h2,h3,h4,h5,h6, strong{
  font-weight: 500;
}
`
