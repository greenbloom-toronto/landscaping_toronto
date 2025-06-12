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
import { FormControl, MenuItem, Checkbox, ListItemText, FormControlLabel, Snackbar, Alert, SelectChangeEvent } from "@mui/material";

interface QuoteFormData {
    firstName: string;
    lastName: string;
    company?: string;
    phone: string;
    email: string;
    address1?: string;
    address2?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    services?: string[];
    comment?: string;
    captcha: boolean;

    // Careers fields
    position?: string;
    legallyEntitled?: string;
    inToronto?: string;
    fluentEnglish?: string;
    hasDriverLicense?: string;
    experienceYears?: string;
}

interface QuoteRequestFormProps {
    careers?: boolean;
}

export const QuoteRequestForm: React.FC<QuoteRequestFormProps> = ({ careers = false }) => {
    const [formData, setFormData] = useState<QuoteFormData>({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        captcha: false,
        ...(careers
            ? {
                position: '',
                legallyEntitled: '',
                inToronto: '',
                fluentEnglish: '',
                hasDriverLicense: '',
                experienceYears: '',
            }
            : {
                company: '',
                address1: '',
                address2: '',
                city: '',
                state: '',
                postalCode: '',
                services: [],
                comment: '',
            }),
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
            const response = await fetch("https://formcarry.com/s/WLva7V9vgPw", {
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

    const handleSelectChange = (e: SelectChangeEvent<unknown>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value as string,
        }));
    };

    return (
        <StyledFormPage id="form">
            <StyledFormPageContent isCareers={true}>
                <StyledFormPageTop>
                    <StyledFormPageTitle>
                        {careers ? 'Career Application' : 'Request for a quote'}
                    </StyledFormPageTitle>
                </StyledFormPageTop>

                <StyledFormPageBottom>
                    <StyledFormPageForm onSubmit={handleSubmit}>
                        <StyledFormPageFieldsWrap>
                            {/* First & Last Name */}
                            <StyledFormInputsFirstLine>
                                <StyledMainPageFieldBlock sx={{ minWidth: 'calc(100%/2 - 10px)', maxWidth: 'calc(100%/2 - 10px)' }}>
                                    <StyledFieldBlockTitle>First Name*</StyledFieldBlockTitle>
                                    <StyledFieldBlockInput
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        placeholder="John"
                                    />
                                </StyledMainPageFieldBlock>
                                <StyledMainPageFieldBlock sx={{ minWidth: 'calc(100%/2 - 10px)', maxWidth: 'calc(100%/2 - 10px)' }}>
                                    <StyledFieldBlockTitle>Last Name*</StyledFieldBlockTitle>
                                    <StyledFieldBlockInput
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        placeholder="Doe"
                                    />
                                </StyledMainPageFieldBlock>
                            </StyledFormInputsFirstLine>

                            {/* Phone & Email */}
                            <StyledFormInputsFirstLine>
                                <StyledMainPageFieldBlock
                                    sx={{ minWidth: careers ? 'calc(100%/2 - 10px)' : 'calc(100%/3 - 10px)', maxWidth: careers ? 'calc(100%/2 - 10px)' : 'calc(100%/3 - 10px)' }}
                                >
                                    <StyledFieldBlockTitle>Phone Number*</StyledFieldBlockTitle>
                                    <StyledFieldBlockInput
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder="(123) 456-7890"
                                    />
                                </StyledMainPageFieldBlock>
                                <StyledMainPageFieldBlock
                                    sx={{ minWidth: careers ? 'calc(100%/2 - 10px)' : 'calc(100%/3 - 10px)', maxWidth: careers ? 'calc(100%/2 - 10px)' : 'calc(100%/3 - 10px)' }}
                                >
                                    <StyledFieldBlockTitle>Email*</StyledFieldBlockTitle>
                                    <StyledFieldBlockInput
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john.doe@email.com"
                                    />
                                </StyledMainPageFieldBlock>
                                {!careers && (
                                    <StyledMainPageFieldBlock>
                                        <StyledFieldBlockTitle>Company (Optional)</StyledFieldBlockTitle>
                                        <StyledFieldBlockInput
                                            name="company"
                                            value={formData.company || ''}
                                            onChange={handleChange}
                                            placeholder="Greenbloom Ltd."
                                        />
                                    </StyledMainPageFieldBlock>
                                )}
                            </StyledFormInputsFirstLine>

                            {careers ? (
                                <>
                                    {/* Position and Work Eligibility */}
                                    <StyledFormInputsFirstLine>
                                        <StyledMainPageFieldBlock
                                            sx={{ minWidth: careers ? 'calc(100%/2 - 10px)' : 'calc(100%/3 - 10px)', maxWidth: careers ? 'calc(100%/2 - 10px)' : 'calc(100%/3 - 10px)' }}
                                        >
                                            <StyledFieldBlockTitle>Which position are you applying for?*</StyledFieldBlockTitle>
                                            <StyledFieldBlockSelect
                                                name="position"
                                                value={formData.position || ''}
                                                onChange={handleSelectChange}
                                                required
                                            >
                                                <MenuItem value="Landscape foreman">Landscape foreman</MenuItem>
                                                <MenuItem value="Landscape labourer">Landscape labourer</MenuItem>
                                                <MenuItem value="Landscape design / sales">Landscape design / sales</MenuItem>
                                            </StyledFieldBlockSelect>
                                        </StyledMainPageFieldBlock>

                                        <StyledMainPageFieldBlock
                                            sx={{ minWidth: careers ? 'calc(100%/2 - 10px)' : 'calc(100%/3 - 10px)', maxWidth: careers ? 'calc(100%/2 - 10px)' : 'calc(100%/3 - 10px)' }}
                                        >
                                            <StyledFieldBlockTitle>Are you legally entitled to work in Canada?*</StyledFieldBlockTitle>
                                            <StyledFieldBlockSelect
                                                name="legallyEntitled"
                                                value={formData.legallyEntitled || ''}
                                                onChange={handleSelectChange}
                                                required
                                            >
                                                <MenuItem value="Yes">Yes</MenuItem>
                                                <MenuItem value="No">No</MenuItem>
                                            </StyledFieldBlockSelect>
                                        </StyledMainPageFieldBlock>
                                    </StyledFormInputsFirstLine>

                                    {/* Location & English Fluency */}
                                    <StyledFormInputsFirstLine>
                                        <StyledMainPageFieldBlock
                                            sx={{ minWidth: careers ? 'calc(100%/2 - 10px)' : 'calc(100%/3 - 10px)', maxWidth: careers ? 'calc(100%/2 - 10px)' : 'calc(100%/3 - 10px)' }}
                                        >
                                            <StyledFieldBlockTitle>Are you in Toronto, ON?*</StyledFieldBlockTitle>
                                            <StyledFieldBlockSelect
                                                name="inToronto"
                                                value={formData.inToronto || ''}
                                                onChange={handleSelectChange}
                                                required
                                            >
                                                <MenuItem value="Yes">Yes</MenuItem>
                                                <MenuItem value="No">No</MenuItem>
                                            </StyledFieldBlockSelect>
                                        </StyledMainPageFieldBlock>

                                        <StyledMainPageFieldBlock
                                            sx={{ minWidth: careers ? 'calc(100%/2 - 10px)' : 'calc(100%/3 - 10px)', maxWidth: careers ? 'calc(100%/2 - 10px)' : 'calc(100%/3 - 10px)' }}
                                        >
                                            <StyledFieldBlockTitle>Are you fluent in English?*</StyledFieldBlockTitle>
                                            <StyledFieldBlockSelect
                                                name="fluentEnglish"
                                                value={formData.fluentEnglish || ''}
                                                onChange={handleSelectChange}
                                                required
                                            >
                                                <MenuItem value="Yes">Yes</MenuItem>
                                                <MenuItem value="No">No</MenuItem>
                                            </StyledFieldBlockSelect>
                                        </StyledMainPageFieldBlock>
                                    </StyledFormInputsFirstLine>

                                    {/* Driver License & Experience */}
                                    <StyledFormInputsFirstLine>
                                        <StyledMainPageFieldBlock
                                            sx={{ minWidth: careers ? 'calc(100%/2 - 10px)' : 'calc(100%/3 - 10px)', maxWidth: careers ? 'calc(100%/2 - 10px)' : 'calc(100%/3 - 10px)' }}
                                        >
                                            <StyledFieldBlockTitle>Do you have a valid Ontario class G driver’s license?*</StyledFieldBlockTitle>
                                            <StyledFieldBlockSelect
                                                name="hasDriverLicense"
                                                value={formData.hasDriverLicense || ''}
                                                onChange={handleSelectChange}
                                                required
                                            >
                                                <MenuItem value="Yes">Yes</MenuItem>
                                                <MenuItem value="No">No</MenuItem>
                                            </StyledFieldBlockSelect>
                                        </StyledMainPageFieldBlock>
                                        <StyledMainPageFieldBlock
                                            sx={{ minWidth: careers ? 'calc(100%/2 - 10px)' : 'calc(100%/3 - 10px)', maxWidth: careers ? 'calc(100%/2 - 10px)' : 'calc(100%/3 - 10px)' }}
                                        >
                                            <StyledFieldBlockTitle>How many years of experience do you have?*</StyledFieldBlockTitle>
                                            <StyledFieldBlockInput
                                                name="experienceYears"
                                                type="number"
                                                value={formData.experienceYears || ''}
                                                onChange={handleChange}
                                                required
                                                placeholder="e.g. 2"
                                            />
                                        </StyledMainPageFieldBlock>
                                    </StyledFormInputsFirstLine>
                                </>
                            ) : (
                                <>


                                    <StyledFormInputsFirstLine>
                                        <StyledMainPageFieldBlock sx={{ minWidth: 'calc(100%/2 - 10px)', maxWidth: 'calc(100%/2 - 10px)' }}>
                                            <StyledFieldBlockTitle>Address Line 1*</StyledFieldBlockTitle>
                                            <StyledFieldBlockInput
                                                name="address1"
                                                value={formData.address1 || ''}
                                                onChange={handleChange}
                                                required
                                                placeholder="123 Main Street"
                                            />
                                        </StyledMainPageFieldBlock>

                                        <StyledMainPageFieldBlock sx={{ minWidth: 'calc(100%/2 - 10px)', maxWidth: 'calc(100%/2 - 10px)' }}>
                                            <StyledFieldBlockTitle>Address Line 2</StyledFieldBlockTitle>
                                            <StyledFieldBlockInput
                                                name="address2"
                                                value={formData.address2 || ''}
                                                onChange={handleChange}
                                                placeholder="Apt. 4B"
                                            />
                                        </StyledMainPageFieldBlock>
                                    </StyledFormInputsFirstLine>

                                    <StyledFormInputsFirstLine>
                                        <StyledMainPageFieldBlock>
                                            <StyledFieldBlockTitle>City*</StyledFieldBlockTitle>
                                            <StyledFieldBlockInput
                                                name="city"
                                                value={formData.city || ''}
                                                onChange={handleChange}
                                                required
                                                placeholder="Toronto"
                                            />
                                        </StyledMainPageFieldBlock>
                                        <StyledMainPageFieldBlock>
                                            <StyledFieldBlockTitle>State*</StyledFieldBlockTitle>
                                            <StyledFieldBlockInput
                                                name="state"
                                                value={formData.state || ''}
                                                onChange={handleChange}
                                                required
                                                placeholder="ON"
                                            />
                                        </StyledMainPageFieldBlock>
                                        <StyledMainPageFieldBlock>
                                            <StyledFieldBlockTitle>Postal Code*</StyledFieldBlockTitle>
                                            <StyledFieldBlockInput
                                                name="postalCode"
                                                value={formData.postalCode || ''}
                                                onChange={handleChange}
                                                required
                                                placeholder="M5V M5V"
                                            />
                                        </StyledMainPageFieldBlock>
                                    </StyledFormInputsFirstLine>

                                    <StyledFormInputsFirstLine>
                                        <StyledMainPageFieldBlock sx={{ minWidth: 'calc(100%/2 - 10px)', maxWidth: 'calc(100%/2 - 10px)', overflow: 'hidden' }}>
                                            <StyledFieldBlockTitle>Select Service</StyledFieldBlockTitle>
                                            <FormControl fullWidth>
                                                <StyledFieldBlockSelect
                                                    multiple
                                                    value={formData.services || []}
                                                    onChange={handleServicesChange}
                                                    renderValue={(selected) => (selected as string[]).join(', ')}
                                                >
                                                    {serviceOptions.map((name) => (
                                                        <MenuItem key={name} value={name}>
                                                            <Checkbox checked={(formData.services || []).indexOf(name) > -1} />
                                                            <ListItemText primary={name} />
                                                        </MenuItem>
                                                    ))}
                                                </StyledFieldBlockSelect>
                                            </FormControl>
                                        </StyledMainPageFieldBlock>

                                        <StyledMainPageFieldBlock sx={{ minWidth: 'calc(100%/2 - 10px)', maxWidth: 'calc(100%/2 - 10px)' }}>
                                            <StyledFieldBlockTitle>Comment</StyledFieldBlockTitle>
                                            <StyledFieldBlockTextArea
                                                name="comment"
                                                value={formData.comment || ''}
                                                onChange={handleChange}
                                                placeholder="I need lawn care this weekend."
                                            />
                                        </StyledMainPageFieldBlock>
                                    </StyledFormInputsFirstLine>
                                </>
                            )}

                            {careers && (
                                <StyledMainPageFieldBlock sx={{ minWidth: 'calc(100%)', maxWidth: 'calc(100%)' }}>
                                    <StyledFieldBlockTitle>Message</StyledFieldBlockTitle>
                                    <StyledFieldBlockTextArea
                                        sx={{
                                            height: '90px'
                                        }}
                                        name="comment"
                                        value={formData.comment || ''}
                                        onChange={handleChange}
                                        placeholder="Enter your cover letter."
                                    />
                                </StyledMainPageFieldBlock>
                            )}

                            {/* Captcha & Submit */}
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
                                                    '&.Mui-checked': { color: '#02703d' },
                                                    '& .MuiSvgIcon-root': { borderRadius: '8px' }
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
                    <Alert onClose={() => setIsSuccess(false)} severity="success" sx={{ borderRadius: '20px' }}>
                        Form submitted. Thank you!
                    </Alert>
                ) : (
                    <Alert onClose={() => setError('')} severity="error" sx={{ borderRadius: '20px' }}>
                        {error}
                    </Alert>
                )}
            </Snackbar>
        </StyledFormPage>

    );
};
