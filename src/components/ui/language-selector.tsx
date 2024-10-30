
import { LANGUAGES } from '@/shared/constants/languages.ts';
import { useTranslation } from 'react-i18next';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    return (
        <Select value={i18n.language} onValueChange={i18n.changeLanguage}>
            <SelectTrigger id="language" className="w-fit bg-black text-white">
                <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent className='bg-black text-white'>
                {LANGUAGES.map(({ label, value }) => (
                    <SelectItem key={value} value={value}>
                        {label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default LanguageSelector;