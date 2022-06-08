import React from "react";
import { Button, useAuthenticator } from "@aws-amplify/ui-react";


import {
    Table,
    TableCell,
    TableBody,
    TableHead,
    TableRow,
} from '@aws-amplify/ui-react';

function getRandomId() {
    return (Math.random() * 9999999).toFixed();
}

export const BasicExample = ({
    caption,
    highlightOnHover,
    size,
    variation,
}) => (
    <Table
        caption={caption}
        highlightOnHover={highlightOnHover}
        size={size}
        variation={variation}
    >
        <TableHead>
            <TableRow>
                <TableCell as="th">Arriendo</TableCell>
                <TableCell as="th">Fecha Inicio</TableCell>
                <TableCell as="th">Fecha Final</TableCell>
                <TableCell as="th">Bicicleta</TableCell>
                <TableCell as="th">Depósito de garantía</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell>#{getRandomId()}</TableCell>
                <TableCell>24-6-2022</TableCell>
                <TableCell>30-7-2022</TableCell>
                <TableCell>Specialized Rockhat 29</TableCell>
                <TableCell>$300.000</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>#{getRandomId()}</TableCell>
                <TableCell>24-6-2022</TableCell>
                <TableCell>30-7-2022</TableCell>
                <TableCell>Trek Marlin 4</TableCell>
                <TableCell>$180.000</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>#{getRandomId()}</TableCell>
                <TableCell>24-6-2022</TableCell>
                <TableCell>30-7-2022</TableCell>
                <TableCell>Bianchi Stone 26</TableCell>
                <TableCell>$200.000</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>#{getRandomId()}</TableCell>
                <TableCell>24-6-2022</TableCell>
                <TableCell>30-7-2022</TableCell>
                <TableCell>Jeep Vesubio</TableCell>
                <TableCell>$220.000</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>#{getRandomId()}</TableCell>
                <TableCell>24-6-2022</TableCell>
                <TableCell>30-7-2022</TableCell>
                <TableCell>Trek Marlin 5</TableCell>
                <TableCell>$250.000</TableCell>
            </TableRow>
        </TableBody>
    </Table>
);


export function Arriendo() {

    const { user } = useAuthenticator((context) => [
        context.user
    ]);

    return (
        <>
            <h1 className="welcome">Hola {user.attributes.given_name} </h1>
            <main className="arriendos-container">
                <h4 className="table-title">Arriendos vigentes:</h4>
                <BasicExample caption="" highlightOnHover="true" size="Large" variation="striped" />
                <Button
                    variation="primary"
                    size="large"
                    className="add-button">
                    Agregar arriendo+
                </Button>
            </main>
        </>
    )
}