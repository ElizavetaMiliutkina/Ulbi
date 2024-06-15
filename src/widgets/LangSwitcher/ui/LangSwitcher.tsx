import {classNames} from 'shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss'
import i18n from "i18next";
import Button, {ThemeButton} from "shared/Button/Button";
import {useTranslation} from "react-i18next";

interface LangSwitcherProps {
    className?: string
}

const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
}

const LangSwitcher = ({className}: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    return (
        <div className={classNames(cls.LangSwitcher, {}, [className])}>
            <Button theme={ThemeButton.CLEAR} onClick={toggle}>{t('Язык')}</Button>
        </div>
    );
};

export default LangSwitcher;