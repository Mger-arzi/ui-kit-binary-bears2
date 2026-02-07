import {TextArea, type TextAreaProps} from './TextArea'
import type {StoryObj} from "@storybook/react-vite";
import {useState} from "react";

const meta = {
    title: 'Components/TextArea',
    component: TextArea,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'dark',
        },
        docs: {
            theme: 'dark',
        },
    },
    tags: ['autodocs'],

    argTypes: {
        argTypes: {
            onChange: { action: 'changed' },
            onBlur: { action: 'blurred' },
            error: { control: 'text' },
            label: { control: 'text' },
            placeholder: { control: 'text' },
            maxLength: { control: 'number' },
            disabled: { control: 'boolean' },
            rows: { control: 'number' },
            width: { control: 'text' },
        },
    },
    args: {},
}
export default meta
type Story = StoryObj<TextAreaProps>

const Template = (args: TextAreaProps) => {
    const [value, setValue] = useState(args.value)

    return (
        <TextArea
            {...args}
            value={value}
            onChange={(val) => {
                setValue(val)
                args.onChange?.(val)
            }}
        />
    )
}
export const Default: Story = {
    render: Template,
    args: {
        label: 'Description',
        name: 'description',
        value: '',
        placeholder: 'write some text...',
        rows: 4,
        width: '400px',
    },
}

export const WithMaxLength: Story = {
    render: Template,
    args: {
        label: 'Comment',
        name: 'comment',
        value: '',
        maxLength: 200,
        rows: 5,
        width: '400px',
    },
}

export const WithError: Story = {
    render: Template,
    args: {
        label: 'Message',
        name: 'message',
        value: 'invalid text',
        error: 'invalid text',
        rows: 4,
        width: '400px',
    },
}

export const Disabled: Story = {
    render: Template,
    args: {
        label: 'disabled field',
        name: 'disabled',
        value: 'Not editable',
        disabled: true,
        rows: 4,
        width: '400px',
    },
}
