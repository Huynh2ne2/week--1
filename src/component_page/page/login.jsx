import React from "react";
import '../scss/login.scss';
import LanguageProvider, { useTranslation } from "../../lang/LanguageProvider";

const LoginPage = () => {
	const { i18n } = useTranslation();
	console.log("Check language: ")
    return (
        <>
			<div className="login-container">
				<div className="content-login">
					<div className="text-sci">
						<h2 className="animated-text">
							{i18n.t('form.title')} <br /> <span>{i18n.t('form.t_title')}</span>
						</h2><br/>
						<p className="animated-text">
							{i18n.t('form.subtitle')}
						</p>
					</div>
				</div>
				<div className="logreg-box">
					<div className="form-box login">
						<form action="#">
							<h2 style={{textTransform:"uppercase"}}>{i18n.t('form.signin')}</h2>
							<div className="input-box">
								<span className="icon">
									<i className="fas fa-envelope"></i>
								</span>
								<input type="email" required />
								<label>Email</label>
							</div>
							<div className="input-box">
								<span className="icon">
									<i className="fas fa-lock"></i>
								</span>
								<input type="password" required />
								<label>{i18n.t('label.password')}</label>
							</div>
							<div className="remember-forgot">
								<label>
									<input type="checkbox" />
									{i18n.t('checkbox.rememberMe')}
								</label>
								<a href="#">{i18n.t('button.forgotPass')}</a>
							</div>
							<button type="submit"
								className="btn-login"
							>{i18n.t('button.singin')} <i className="fa-solid fa-paper-plane" style={{color:'white'}}></i></button>
							<div className="login-register">
								<p>
									{i18n.t('form.notice')}&nbsp;
									<a href="#" className="register-link">
										{i18n.t('button.signup')}
									</a>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
            
        </>
    )
}

export default LoginPage;