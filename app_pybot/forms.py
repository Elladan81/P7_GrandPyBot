from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired


class ChatForm(FlaskForm):
    """Minimalist form used in /index page
    """
    user_request = StringField(
        "Dis-moi GrandPyBot, ...", validators=[DataRequired()]
    )
    submit = SubmitField("Valider")
