import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en <GifExpertApp/>', () => { 

    test('No debe agregar la cactegoria si ya existe', () => { 


        render(<GifExpertApp/>)


    })
})