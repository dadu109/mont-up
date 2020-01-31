import React from 'react';
import Container from '../components/Container';
import Accordion from '../components/Accordion';
import Cena from '../components/Cena';

const Cennik = () => {
    return (
        <Container title='Cennik'>
            <Accordion>
                <div label='Mycie powierzchni'>
                    <Cena
                        title='Mycie powierzchni płaskiej'
                        cenaod='5'
                        cenado='7'
                        za='m²'
                    >
                        Posadzka przemysłowa, garaż, kostka brukowa
                        (uzupełnienie szczelin piaskiem 1 zł / m²)
                    </Cena>
                    <Cena
                        title='Mycie elewacji '
                        cenaod='6'
                        cenado='10'
                        za='m²'
                    >
                        Cena uzależniona od rodzaju tynku, wysokości obiektu
                        oraz dostępu.
                        <br /> W przypadku zielonych nalotów (glonów) doliczamy
                        2 zł / m² należy dzień wczesniej spryskać powierzchnię
                        specjalistycznym środkiem.
                    </Cena>
                    <Cena title='Mycie dachów' cenaod='5' cenado='9' za='m²'>
                        W zależności od dostępu doliczamy koszt podnośnika
                        koszowego.
                    </Cena>
                    <Cena
                        title='Impregnacja powierzchni'
                        cenaod='5'
                        za='m²'
                    ></Cena>
                </div>
                <div label='Zakładanie ogrodów i trawników'>
                    <Cena
                        title='Usługa glebogryzarką separacyjną'
                        cenaod='1,50'
                        cenado='2,50'
                        za='m²'
                    >
                        W zależności od powierzchni i przeszkód na ogrodzie .
                    </Cena>
                    <Cena title='Rozkładanie siatki na krety' cena='2' za='m²'>
                        W zależności od powierzchni i przeszkód na ogrodzie .
                    </Cena>
                    <Cena title='Wysiew trawy' cena='2' za='m²'>
                        Cena nie zawiera materiałów
                    </Cena>
                    <Cena title='Niwelacja terenu i przygotowanie pod wysiew'>
                        Wycena indywidualna
                    </Cena>
                </div>
                <div label='Pielęgnacja ogrodów i trawników'>
                    <Cena title='Koszenie ogrodów' cenaod='15' za='ar'>
                        Cena zależna od powierzchni oraz rodzaju koszenia (z
                        koszem lub bez)
                    </Cena>
                    <Cena title='Wertykulacja' cenaod='0,65' za='m²'>
                        Za dodatkową opłatą istnieje możliwość zabrania trawy
                    </Cena>
                    <Cena title='Nawożenie' cenaod='0,50' za='m²'></Cena>
                    <Cena title='Oprysk' cenaod='0,50' za='m²'></Cena>
                    <Cena title='Zbieranie liści' cenaod='1,50' za='m²'></Cena>
                    <Cena
                        title='Przycinanie żywopłotu'
                        cenaod='4'
                        cenado='7'
                        za='m²'
                    ></Cena>
                </div>
                <div label='Wycinka drzew'>
                    <Cena title='Wycena indywidualna' />
                </div>
                <div label='Prace alpinistyczne'>
                    <Cena title='Wycena indywidualna' />
                </div>
            </Accordion>
        </Container>
    );
};

export default Cennik;
