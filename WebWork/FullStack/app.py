from flask import Flask, render_template, redirect, url_for, request, flash
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, FileField, SubmitField, TextAreaField, SelectField, SubmitField
from wtforms.validators import DataRequired
from flask_wtf.file import FileRequired, FileAllowed
from werkzeug.utils import secure_filename
import os


app = Flask(__name__)
app.config['SECRET_KEY'] = 'you-will-never-guess'
app.config['UPLOAD_FOLDER'] = '/uploads'

class RegisterForm(FlaskForm):
    firstName = StringField("First Name", validators=[DataRequired()])
    lastName = StringField("Last Name", validators=[DataRequired()])
    describe = StringField('Description', validators=[DataRequired()])
    email =  StringField("Email", validators=[DataRequired()])
    tickets = StringField("Number of Tickets", validators=[DataRequired()])
    Regtype = SelectField('Choose your option', choices=[('1','Self'), ('2','Group'), ('3','Corporate'), ('4','Others')])
    file = FileField(validators=[FileRequired(), FileAllowed(['jpeg', 'png'], 'Images only!')])
    submit = SubmitField()



@app.route('/')
def index():
   return render_template('index.html')


@app.route('/form', methods=['GET', 'POST'])
def form():
    form = RegisterForm()
    regtypes = ['Self', 'Group', 'Corporate', 'Others']
    if request.method =='POST':
        name =  form.firstName.data + " " + form.lastName.data
        email = form.email.data
        ticketcount = form.tickets.data
        desc = form.describe.data
        # file = form.file.data
        file = request.files['file']
        regtype = regtypes[int(form.Regtype.data)-1]

        file.save(os.path.join('static/images', secure_filename(file.filename)))

        context = {
            'name': name,
            'email': email,
            'desc': desc,
            'ticket': ticketcount,
            'type': regtype,
            'file': file.filename
        }
        return redirect(url_for('preview', context = context))
        # return context

    return render_template('form.html', form=form)


     
@app.route('/preview', methods=['GET', 'POST'])
def preview():
    dict = eval(request.args.get('context', None))
    return render_template('preview.html', context=dict)

if __name__ == "__main__":
    app.run(debug=True)