import React from "react"
import { Button } from "@aws-amplify/ui-react";

export function FormButton(props) {
    return (
        <Button
            variation="primary"
            size="large"
            className="add-button">
            {props.text}
        </Button>
    )
}
