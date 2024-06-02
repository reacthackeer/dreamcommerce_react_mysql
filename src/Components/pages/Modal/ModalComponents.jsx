import { Box, Button, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import '../../../styles/ProductModal.scss';
const ModalComponents = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <Box> 

            <Box className='product__modal__page__container'>
                <Box>
                <Text>
                HOME
                /
                DESKTOP PC AND SERVER
                /
                DESKTOP COMPONENT
                Showing 1-45 of 2255 results
                
                
                (Bundle With PC) Intel Comet Lake Pentiu...
                7270 TK
                
                6800 TK
                
                
                (Bundle With PC) Intel Comet Lake Pentiu...
                7490 TK
                
                6950 TK
                
                
                (Bundle with PC) AMD Athlon 3000G 3.5GHz...
                8460 TK
                
                7800 TK
                
                
                Intel 10th Gen Comet Lake Core i3 10100F...
                9110 TK
                
                8800 TK
                
                
                Intel 10th Gen Comet Lake Core i3 10105F...
                10630 TK
                
                9800 TK
                
                
                (Bundle With PC) Intel 10th Gen Comet La...
                11500 TK
                
                11000 TK
                
                
                (Bundle With PC) Intel 10th Gen Comet La...
                11500 TK
                
                11200 TK
                
                
                (Bundle with PC) Intel 12th Gen Alder La...
                12590 TK
                
                11800 TK
                
                
                Intel 3rd Gen Sandy Bridge E Core i7 382...
                13350 TK
                
                12500 TK
                
                
                AMD Ryzen 5 3500 Desktop Processor...
                14000 TK
                
                12900 TK
                
                
                Intel Core i5 4460 4th Gen Desktop Proce...
                15730 TK
                
                14600 TK
                
                
                Intel 10th Gen Comet Lake Core i5 10400F...
                15730 TK
                
                14800 TK
                
                
                Intel 9th Gen Coffee Lake Core i5 9400 D...
                16500 TK
                
                15100 TK
                
                
                (Bundle With PC) Intel 10th Gen Comet La...
                16550 TK
                
                15300 TK
                
                
                (Bundle with PC) AMD Ryzen 5 3500X Deskt...
                18450 TK
                
                17500 TK
                
                shop ads
                
                (Bundle With PC) Intel 10th Gen Comet La...
                19530 TK
                
                18000 TK
                
                
                (Bundle With PC) Intel 11th Gen Rocket L...
                19420 TK
                
                18000 TK
                
                
                (Bundle With PC) Intel 11th Gen Rocket L...
                20620 TK
                
                19000 TK
                
                
                (Bundle With PC) AMD Ryzen 5 3600 Withou...
                21220 TK
                
                19200 TK
                
                
                (Bundle With PC) Intel 10th Gen Comet La...
                22790 TK
                
                21300 TK
                
                
                (Bundle with PC) Intel 12th Gen Alder La...
                22240 TK
                
                21500 TK
                
                
                AMD Ryzen 5 Pro 4650G 3.7GHz-4.2GHz 6 Co...
                23330 TK
                
                22000 TK
                
                
                (Bundle with PC) AMD Ryzen 5 5600G 6 Cor...
                26370 TK
                
                24300 TK
                
                
                (Bundle With PC) Intel 11th Gen Rocket L...
                26580 TK
                
                24700 TK
                
                
                AMD Ryzen 7 3800X Without GPU Desktop Pr...
                27990 TK
                
                26000 TK
                
                
                (Bundle with PC) AMD Ryzen 5 5600X Deskt...
                28210 TK
                
                26200 TK
                
                
                AMD Ryzen Threadripper 1900X 3.8-4.0GHz ...
                29300 TK
                
                28000 TK
                
                
                AMD Ryzen 7 1800X 3.6-4.0 GHz 8-Core 20M...
                30160 TK
                
                28000 TK
                
                
                Intel Kaby Lake Xeon E3-1240 v6 8MB Cac...
                29840 TK
                
                28000 TK
                
                
                (Bundle With PC) Intel 10th Gen Comet La...
                31900 TK
                
                29800 TK
                
                shop ads
                
                (Bundle with PC) Intel 12th Gen Core i5 ...
                32010 TK
                
                30500 TK
                
                
                (Bundle With PC) Intel 10th Gen Comet La...
                34500 TK
                
                32000 TK
                
                
                (Bundle With PC) Intel 11th Gen Rocket L...
                34180 TK
                
                32000 TK
                
                
                (Bundle with PC) AMD Ryzen 7 5700G 8 Cor...
                35700 TK
                
                33000 TK
                
                
                AMD Ryzen 7 Pro Radeon Graphics Desktop ...
                35260 TK
                
                33000 TK
                
                
                (Bundle with PC) Intel 12th Gen Alder La...
                38300 TK
                
                35500 TK
                
                
                AMD Ryzen 7 5800X Desktop Processor...
                39600 TK
                
                36500 TK
                
                
                (Bundle With PC) Intel 11th Gen Rocket L...
                39280 TK
                
                36500 TK
                
                
                (Bundle with PC) Intel 12th Gen Core i7 ...
                41770 TK
                
                38800 TK
                
                
                (Bundle With PC) Intel 11th Gen Rocket L...
                46440 TK
                
                43000 TK
                
                
                (Bundle with PC) Intel 12th Gen Core i7 ...
                46660 TK
                
                43300 TK
                
                
                (Bundle With PC) AMD Ryzen 9 3900X Witho...
                47960 TK
                
                44500 TK
                
                
                (Bundle with PC) Intel 12th Gen Alder La...
                54790 TK
                
                51000 TK
                
                
                (Bundle With PC) Intel 11th Gen Rocket L...
                58050 TK
                
                54000 TK
                
                
                (Bundle with PC) AMD Ryzen 9 5900X deskt...
                </Text>
                </Box>
            </Box>
            <Button onClick={()=> setOpenModal(()=> !openModal)}>Toggle Modal</Button>
        </Box>
    );
};

export default ModalComponents;