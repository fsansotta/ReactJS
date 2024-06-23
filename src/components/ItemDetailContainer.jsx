import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import Cargando from './Cargando'
import { useParams } from 'react-router-dom'
import { getFirestore, collection, getDocs } from "firebase/firestore"
const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)
    const {productoId} = useParams()

    useEffect(() => {
      (async () => {
        try {
          const db = getFirestore();
          const docsRef = collection(db, "productos");
          const querySnapshot = await getDocs(docsRef);
          const productos = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          const productoFiltrado = productos.find((producto) => producto.id === Number(productoId))
          setProducto(productoFiltrado)
        } catch (error) {
          console.error("El producto no se encuentra disponible en este momento, inténtelo nuevamente o más tarde", error);
        }
      })()
  

    }, [productoId])

  return (
    <div>{
        producto
        ? 
        <ItemDetail producto={producto}/> : <Cargando/>}</div>
  )
}

export default ItemDetailContainer