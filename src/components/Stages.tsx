import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Demotest} from "./Methodspages/Demotest";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            flexBasis: '33.33%',
            flexShrink: 0,
        },
        secondaryHeading: {
            fontSize: theme.typography.pxToRem(15),
            color: theme.palette.text.secondary,
        },
    }),
);

export default function ControlledAccordions() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>Последовательность действий
                    </Typography>
                    <Typography className={classes.secondaryHeading}>I am an accordion</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <p>Шаг 1: Пользователь на веб-сайте продавца оформляет заказ, помещая товары в
                            корзину.</p>
                        <p>
                            Шаг 2: При переходе к оплате веб-сайт генерирует на странице QR-код (в случае,
                            если пользователь открывает веб-сайт с ПК) либо кнопку (в случае, если пользователь
                            открывает веб-сайт с телефона).</p>
                        <p> Шаг 3: Покупатель выполняет следующие действия:
                            <ul>
                                <li> сканирует QR-код с экрана монитора ПК своим моб. приложением “Оплати” (в
                                    случае, если пользователь открывает веб-сайт с ПК);</li>
                                <li> нажимает кнопку со ссылкой на открытие приложения Оплати (в случае, если
                                    пользователь открывает веб-сайт с телефона).</li>
                            </ul>
                            <p>Сканирование или переход по ссылке пользователем в моб. приложение позволяют
                                осуществить оплату после подтверждения пользователя. В случае перехода по
                                ссылке, приложение отправит пользователя обратно на страницу веб-сайта
                                (успешного либо не успешного результата оплаты).
                               <p> Примечание: данный способ оплаты исключает возможность использования программ
                                   лояльности продавца.</p>
                           </p>
                        </p>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography className={classes.heading}>Диаграмма последовательностей при оплате</Typography>
                    <Typography className={classes.secondaryHeading}>
                        +используемые запросы
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <Demotest/>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography className={classes.heading}>Advanced settings</Typography>
                    <Typography className={classes.secondaryHeading}>
                        Filtering has been entirely disabled for whole web server
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                        vitae egestas augue. Duis vel est augue.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography className={classes.heading}>Personal data</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                        vitae egestas augue. Duis vel est augue.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}