import { useState } from "react";
import {
    StyledFieldBlockInput,
    StyledFieldBlockSelect,
    StyledFieldBlockTextArea,
    StyledFieldBlockTitle,
    StyledMainPageFieldBlock
} from "../MainPage/styled";
import {
    StyledFormInputsFirstLine,
    StyledFormPage,
    StyledFormPageBottom,
    StyledFormPageContent,
    StyledFormPageFieldsWrap,
    StyledFormPageForm,
    StyledFormPageTitle,
    StyledFormPageTop,
    StyledFormSubmitButton
} from "./styled.tsx";
import '../MainPage/style.scss';
import { FormControl, InputLabel, Select, OutlinedInput, MenuItem, Checkbox, ListItemText, FormControlLabel, Snackbar, Alert } from "@mui/material";

interface QuoteFormData {
    firstName: string;
    lastName: string;
    company: string;
    phone: string;
    email: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    postalCode: string;
    services: string[]; // ✅ This is the important part
    comment: string;
    captcha: boolean;
}

export const QuoteRequestForm: React.FC = () => {
    const [formData, setFormData] = useState<QuoteFormData>({
        firstName: '',
        lastName: '',
        company: '',
        phone: '',
        email: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        postalCode: '',
        services: [],
        comment: '',
        captcha: false
    });

    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, type } = e.target;
        const value = type === 'checkbox'
            ? (e.target as HTMLInputElement).checked
            : e.target.value;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleServicesChange = (event: any) => {
        const {
            target: { value },
        } = event;
        setFormData({
            ...formData,
            services: typeof value === 'string' ? value.split(',') : value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
      
        if (!formData.captcha) {
          setError("Please confirm you're not a robot.");
          return;
        }
      
        // Filter out empty fields and captcha
        const { captcha, ...rest } = formData;
        const filteredData: { [key: string]: string | string[] } = {};
      
        Object.entries(rest).forEach(([key, value]) => {
          if (Array.isArray(value)) {
            if (value.length > 0) filteredData[key] = value;
          } else if (value.trim() !== '') {
            filteredData[key] = value;
          }
        });
      
        try {
          const response = await fetch("https://formcarry.com/s/P2EIggoyDQd", {
            method: 'POST',
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(filteredData)
          });
      
          const result = await response.json();
      
          if (result.code === 200) {
            setIsSuccess(true);
            setFormData({
              firstName: '',
              lastName: '',
              company: '',
              phone: '',
              email: '',
              address1: '',
              address2: '',
              city: '',
              state: '',
              postalCode: '',
              services: [],
              comment: '',
              captcha: false
            });
          } else {
            setError("There was an error: " + result.message);
          }
        } catch (err: any) {
          setError("Submission failed. Please try again.");
        }
      };
      

    const serviceOptions = [
        'Cleanup',
        'Snow removal',
        'Aeration',
        'Sod',
        'Tree removal',
        'Garden maintenance',
        'Fertilizer',
        'Mulch',
        'Planting',
        'Other'
    ];

    return (
        <StyledFormPage>
            <StyledFormPageContent>
                <StyledFormPageTop>
                    <StyledFormPageTitle>Request for a quote</StyledFormPageTitle>
                </StyledFormPageTop>
                <StyledFormPageBottom>
                    <StyledFormPageForm onSubmit={handleSubmit}>
                        <StyledFormPageFieldsWrap>
                            <StyledFormInputsFirstLine>
                                <StyledMainPageFieldBlock sx={{
                                    minWidth: 'calc(100%/2 - 10px)',
                                    maxWidth: 'calc(100%/2 - 10px)',
                                }}>
                                    <StyledFieldBlockTitle>First Name*</StyledFieldBlockTitle>
                                    <StyledFieldBlockInput
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        placeholder="John"
                                    />
                                </StyledMainPageFieldBlock>
                                <StyledMainPageFieldBlock sx={{
                                    minWidth: 'calc(100%/2 - 10px)',
                                    maxWidth: 'calc(100%/2 - 10px)',
                                }}>
                                    <StyledFieldBlockTitle>Last Name*</StyledFieldBlockTitle>
                                    <StyledFieldBlockInput
                                        required
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Doe"
                                    />
                                </StyledMainPageFieldBlock>
                            </StyledFormInputsFirstLine>

                            <StyledFormInputsFirstLine>
                                <StyledMainPageFieldBlock>
                                    <StyledFieldBlockTitle>Phone Number*</StyledFieldBlockTitle>
                                    <StyledFieldBlockInput
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        type="tel"
                                        placeholder="(123) 456-7890"
                                    />
                                </StyledMainPageFieldBlock>

                                <StyledMainPageFieldBlock>
                                    <StyledFieldBlockTitle>Email*</StyledFieldBlockTitle>
                                    <StyledFieldBlockInput
                                        required
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        type="email"
                                        placeholder="john.doe@email.com"
                                    />
                                </StyledMainPageFieldBlock>
                                <StyledMainPageFieldBlock>
                                    <StyledFieldBlockTitle>Company (Optional)</StyledFieldBlockTitle>
                                    <StyledFieldBlockInput
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Greenbloom Ltd."
                                    />
                                </StyledMainPageFieldBlock>
                            </StyledFormInputsFirstLine>

                            <StyledFormInputsFirstLine>
                                <StyledMainPageFieldBlock sx={{
                                    minWidth: 'calc(100%/2 - 10px)',
                                    maxWidth: 'calc(100%/2 - 10px)',
                                }}>
                                    <StyledFieldBlockTitle>Address Line 1*</StyledFieldBlockTitle>
                                    <StyledFieldBlockInput
                                        required
                                        name="address1"
                                        value={formData.address1}
                                        onChange={handleChange}
                                        placeholder="123 Main Street"
                                    />
                                </StyledMainPageFieldBlock>

                                <StyledMainPageFieldBlock sx={{
                                    minWidth: 'calc(100%/2 - 10px)',
                                    maxWidth: 'calc(100%/2 - 10px)',
                                }}>
                                    <StyledFieldBlockTitle>Address Line 2</StyledFieldBlockTitle>
                                    <StyledFieldBlockInput
                                        name="address2"
                                        value={formData.address2}
                                        onChange={handleChange}
                                        placeholder="Apt. 4B"
                                    />
                                </StyledMainPageFieldBlock>
                            </StyledFormInputsFirstLine>

                            <StyledFormInputsFirstLine>
                                <StyledMainPageFieldBlock>
                                    <StyledFieldBlockTitle>City*</StyledFieldBlockTitle>
                                    <StyledFieldBlockInput
                                        required
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        placeholder="Toronto"
                                    />
                                </StyledMainPageFieldBlock>
                                <StyledMainPageFieldBlock>
                                    <StyledFieldBlockTitle>State*</StyledFieldBlockTitle>
                                    <StyledFieldBlockInput
                                        required
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        placeholder="ON"
                                    />
                                </StyledMainPageFieldBlock>
                                <StyledMainPageFieldBlock>
                                    <StyledFieldBlockTitle>Postal Code*</StyledFieldBlockTitle>
                                    <StyledFieldBlockInput
                                        required
                                        name="postalCode"
                                        value={formData.postalCode}
                                        onChange={handleChange}
                                        placeholder="M5V M5V"
                                    />
                                </StyledMainPageFieldBlock>
                            </StyledFormInputsFirstLine>

                            <StyledFormInputsFirstLine>
                                <StyledMainPageFieldBlock sx={{
                                    minWidth: 'calc(100%/2 - 10px)',
                                    maxWidth: 'calc(100%/2 - 10px)',
                                }}>
                                    <StyledFieldBlockTitle>Select Service</StyledFieldBlockTitle>
                                    <FormControl fullWidth>
                                        <StyledFieldBlockSelect
                                            multiple
                                            value={formData.services}
                                            onChange={handleServicesChange}
                                            renderValue={(selected) => (selected as string[]).join(', ')}
                                        >
                                            {serviceOptions.map((name) => (
                                                <MenuItem key={name} value={name}>
                                                    <Checkbox checked={formData.services.indexOf(name) > -1} />
                                                    <ListItemText primary={name} />
                                                </MenuItem>
                                            ))}
                                        </StyledFieldBlockSelect>
                                    </FormControl>
                                </StyledMainPageFieldBlock>

                                <StyledMainPageFieldBlock sx={{
                                    minWidth: 'calc(100%/2 - 10px)',
                                    maxWidth: 'calc(100%/2 - 10px)',
                                }}>
                                    <StyledFieldBlockTitle>Comment</StyledFieldBlockTitle>
                                    <StyledFieldBlockTextArea
                                        name="comment"
                                        value={formData.comment}
                                        onChange={handleChange}
                                        placeholder="I need lawn care this weekend."
                                    />
                                </StyledMainPageFieldBlock>
                            </StyledFormInputsFirstLine>

                            <StyledFormInputsFirstLine sx={{ alignItems: 'center' }}>
                                <StyledMainPageFieldBlock sx={{
                                    minWidth: 'calc(100%/2 - 10px)',
                                    maxWidth: 'calc(100%/2 - 10px)',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <FormControlLabel
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            width: '100%',
                                            background: '#fff',
                                            height: '56px',
                                            margin: 0,
                                            marginTop: '10px',
                                            borderRadius: '20px',
                                            justifyContent: 'center',

                                            ['span + span']: {
                                                color: '#02703d',
                                                fontFamily: 'Montserrat',
                                                marginLeft: '20px',
                                                fontWeight: 700,
                                                fontSize: '18px',
                                                marginTop: '5px'
                                            }
                                        }}
                                        control={
                                            <Checkbox
                                                name="captcha"
                                                checked={formData.captcha}
                                                onChange={handleChange}
                                                sx={{
                                                    color: '#02703d',
                                                    transform: 'scale(1.65)',
                                                    borderWidth: '1px',
                                                    '&.Mui-checked': {
                                                        color: '#02703d',
                                                    },
                                                    '& .MuiSvgIcon-root': {
                                                        borderRadius: '8px', // rounded corners
                                                    }
                                                }}
                                            />
                                        }
                                        label="I am not a robot"
                                    />
                                </StyledMainPageFieldBlock>

                                <StyledFormSubmitButton type="submit">Submit</StyledFormSubmitButton>
                            </StyledFormInputsFirstLine>
                        </StyledFormPageFieldsWrap>
                    </StyledFormPageForm>
                </StyledFormPageBottom>
            </StyledFormPageContent>

            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={isSuccess || !!error}
                autoHideDuration={6000}
                onClose={() => {
                    setIsSuccess(false);
                    setError('');
                }}
            >
                {isSuccess ? (
                    <Alert
                        onClose={() => setIsSuccess(false)}
                        severity="success"
                        sx={{ borderRadius: '20px' }}
                    >
                        Form submitted. Thank you!
                    </Alert>
                ) : (
                    <Alert
                        onClose={() => setError('')}
                        severity="error"
                        sx={{ borderRadius: '20px' }}
                    >
                        {error}
                    </Alert>
                )}
            </Snackbar>
        </StyledFormPage>
    );
};
