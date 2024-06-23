import { useState, useEffect, useContext} from 'react'
import Cargando from "./Cargando"
import ItemList from "./ItemList"
import Item from './Item'
import { useParams } from 'react-router-dom'
import { CartContext } from '../context/cartContext'
import { getFirestore, collection, getDocs } from "firebase/firestore"

const ItemListContainer = ({ props }) => {

  const [productos, setProductos] = useState([])
  const {categoria} = useParams()
  const items = useContext(CartContext)




  useEffect(() => {
    (async () => {
      try {
        const db = getFirestore();
        const docsRef = collection(db, "productos");
        const querySnapshot = await getDocs(docsRef);
        let todos = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        if (categoria) {
          const productosFiltrados = todos.filter((producto) => producto.categoria === categoria);
          setProductos(productosFiltrados);
        } else {
          setProductos(todos);
        }
      } catch (error) {
        console.error("El producto no se encuentra disponible en este momento, inténtelo nuevamente o más tarde", error);
      }
    })();
  }, [categoria])




  
  return (
    <div>
      <p>BIENVENIDO {props}</p>
    {productos.length == 0 ? <Cargando/> : <ItemList productos={productos}/>}
    </div>
  )
 }

      export default ItemListContainer