# Documentação da aula 10- 

## Informações Gerais
- **Data de Execução**: 26/11/2024
- **Aluno**: Pedro Lucas sp
# Configuração do Projeto com Reactstrap

## Passos Realizados

# Documentação: Como implementei o exercício de componentes React - Parte 2

### Criação da pasta `shared` e do arquivo `dishes.js`

Primeiro, criei uma pasta chamada `shared` dentro da pasta `src`, onde centralizei os dados dos pratos. Dentro dessa pasta, criei um arquivo `dishes.js` que exporta uma constante `DISHES` contendo um array de objetos, representando cada prato disponível no menu.

Exemplo do conteúdo de `dishes.js`:

```javascript
export const DISHES = [
  {
    id: 0,
    name: 'Uthappizza',
    image: 'assets/images/uthappizza.png',
    category: 'mains',
    label: 'Hot',
    price: '4.99',
    description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza...',
    comments: [ /* Lista de comentários */ ]
  },
  {
    id: 1,
    name: 'Zucchipakoda',
    image: 'assets/images/zucchipakoda.png',
    category: 'appetizer',
    label: '',
    price: '1.99',
    description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter...',
    comments: [ /* Lista de comentários */ ]
  },
  /* Mais pratos... */
];
```

Esses dados foram importados para o componente `App.js` para serem passados como props para o componente `MenuComponent`.

### Alteração do componente `MenuComponent.js`

O componente `MenuComponent` foi refatorado para usar o `Card` do `reactstrap`, conforme solicitado. A funcionalidade de renderizar os pratos foi ajustada para utilizar esse componente, que proporciona uma interface mais limpa e interativa.

#### Estrutura do Menu

O Menu renderiza uma lista de pratos em cartões (`Card`), onde cada prato é exibido com uma imagem e o nome. Ao clicar em um prato, o estado `selectedDish` é atualizado para exibir as informações detalhadas sobre o prato selecionado.

Exemplo de implementação do componente `MenuComponent`:

```javascript
import React, { useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

const Menu = (props) => {
  const [selectedDish, setSelectedDish] = useState(null);
  
  const onDishSelect = (dish) => {
    setSelectedDish(dish);
  };

  const renderDish = (dish) => {
    if (dish != null) {
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  };

  const menu = props.dishes.map((dish) => {
    return (
      <div className="col-12 col-md-5 m-1" key={dish.id}>
        <Card onClick={() => onDishSelect(dish)}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">{menu}</div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {renderDish(selectedDish)}
        </div>
      </div>
    </div>
  );
};

export default Menu;
```

### Refatoração do componente `App.js`

Em `App.js`, importei o arquivo `dishes.js` contendo a constante `DISHES` e a passei como props para o componente `Menu`. Assim, os dados dos pratos são acessíveis no componente `Menu` e podem ser exibidos como cards. A estrutura da `Navbar` foi mantida para que o título "Ristorante Con Fusion" fosse exibido na parte superior da página.

Exemplo de `App.js`:

```javascript
import './App.css';
import React, { useState } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';

function App() {
  const [dishes] = useState(DISHES);

  return (
    <div>
      <Navbar dark color="primary" expand="md">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          <div>Aluno: Fulano de Tal</div>
        </div>
      </Navbar>
      <Menu dishes={dishes} />
    </div>
  );
}

export default App;
```

### Testes e verificação

Testei a interação entre o menu e os detalhes dos pratos. Ao clicar em um prato, os detalhes correspondentes são renderizados corretamente. Verifiquei também que todos os dados dos pratos (nome, imagem, descrição) estavam sendo exibidos corretamente no componente `Card`.


## Conclusão

O exercício foi concluído com sucesso. O componente de menu foi refatorado para exibir os pratos de forma interativa, utilizando o componente `Card` do `reactstrap` para renderizar os pratos e também exibir detalhes sobre o prato selecionado. Além disso, centralizei os dados dos pratos em um arquivo separado (`dishes.js`), mantendo o código mais organizado.
```
