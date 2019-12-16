package com.taufiqsejati.android.kalkulator;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.text.TextUtils;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    private EditText input1, input2, input3;
    private TextView output2;
    private Button tambah, kurang, kali, bagi;
    private CheckBox checkBox1, checkBox2, checkBox3;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        input1 = findViewById(R.id.editText1);
        input2 = findViewById(R.id.editText2);
        input3 = findViewById(R.id.editText3);
        output2 = findViewById(R.id.textView2);
        tambah = findViewById(R.id.button1);
        kurang = findViewById(R.id.button2);
        kali = findViewById(R.id.button3);
        bagi = findViewById(R.id.button4);
        checkBox1 = findViewById(R.id.checkBox1);
        checkBox2 = findViewById(R.id.checkBox2);
        checkBox3 = findViewById(R.id.checkBox3);

        tambah.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                if(checkBox1.isChecked() && checkBox2.isChecked() && !checkBox3.isChecked()){
                    if (!TextUtils.isEmpty(input1.getText().toString()) &&!TextUtils.isEmpty(input2.getText().toString())) {
                        int nilai1 = Integer.parseInt(input1.getText().toString());
                        int nilai2 = Integer.parseInt(input2.getText().toString());
                        int tambah = nilai1 + nilai2;
                        output2.setText(tambah + " ");
                    }
                    }
                if(checkBox1.isChecked() && !checkBox2.isChecked() && checkBox3.isChecked()){
                    if (!TextUtils.isEmpty(input1.getText().toString()) &&!TextUtils.isEmpty(input3.getText().toString())) {
                        int nilai1 = Integer.parseInt(input1.getText().toString());
                        int nilai3 = Integer.parseInt(input3.getText().toString());
                        int tambah = nilai1 + nilai3;
                        output2.setText(tambah + " ");
                    }
                }
                if(!checkBox1.isChecked() && checkBox2.isChecked() && checkBox3.isChecked()){
                    if (!TextUtils.isEmpty(input2.getText().toString()) &&!TextUtils.isEmpty(input3.getText().toString())) {
                        int nilai2 = Integer.parseInt(input2.getText().toString());
                        int nilai3 = Integer.parseInt(input3.getText().toString());
                        int tambah = nilai2 + nilai3;
                        output2.setText(tambah + " ");
                    }
                }
                if(checkBox1.isChecked() && checkBox2.isChecked() && checkBox3.isChecked()){
                    if (!TextUtils.isEmpty(input1.getText().toString()) &&!TextUtils.isEmpty(input2.getText().toString()) && !TextUtils.isEmpty(input3.getText().toString())){
                        int nilai1 = Integer.parseInt(input1.getText().toString());
                        int nilai2 = Integer.parseInt(input2.getText().toString());
                        int nilai3 = Integer.parseInt(input3.getText().toString());
                        int tambah = nilai1 + nilai2 + nilai3;
                        output2.setText(tambah + " ");
                    }
                }if (checkBox1.isChecked() && !checkBox2.isChecked() && !checkBox3.isChecked()){
                    output2.setText("Error");
                }if (!checkBox1.isChecked() && checkBox2.isChecked() && !checkBox3.isChecked()){
                    output2.setText("Error");
                }if (!checkBox1.isChecked() && !checkBox2.isChecked() && checkBox3.isChecked()){
                    output2.setText("Error");
                }
            }
        });

        kurang.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                if(checkBox1.isChecked() && checkBox2.isChecked() && !checkBox3.isChecked()){
                    if (!TextUtils.isEmpty(input1.getText().toString()) &&!TextUtils.isEmpty(input2.getText().toString())) {
                        int nilai1 = Integer.parseInt(input1.getText().toString());
                        int nilai2 = Integer.parseInt(input2.getText().toString());
                        int kurang = nilai1 - nilai2;
                        output2.setText(kurang + " ");
                    }
                }
                if(checkBox1.isChecked() && !checkBox2.isChecked() && checkBox3.isChecked()){
                    if (!TextUtils.isEmpty(input1.getText().toString()) &&!TextUtils.isEmpty(input3.getText().toString())) {
                        int nilai1 = Integer.parseInt(input1.getText().toString());
                        int nilai3 = Integer.parseInt(input3.getText().toString());
                        int kurang = nilai1 - nilai3;
                        output2.setText(kurang + " ");
                    }
                }
                if(!checkBox1.isChecked() && checkBox2.isChecked() && checkBox3.isChecked()){
                    if (!TextUtils.isEmpty(input2.getText().toString()) &&!TextUtils.isEmpty(input3.getText().toString())) {
                        int nilai2 = Integer.parseInt(input2.getText().toString());
                        int nilai3 = Integer.parseInt(input3.getText().toString());
                        int kurang = nilai2 - nilai3;
                        output2.setText(kurang + " ");
                    }
                }
                if(checkBox1.isChecked() && checkBox2.isChecked() && checkBox3.isChecked()){
                    if (!TextUtils.isEmpty(input1.getText().toString()) &&!TextUtils.isEmpty(input2.getText().toString()) && !TextUtils.isEmpty(input3.getText().toString())){
                        int nilai1 = Integer.parseInt(input1.getText().toString());
                        int nilai2 = Integer.parseInt(input2.getText().toString());
                        int nilai3 = Integer.parseInt(input3.getText().toString());
                        int kurang = nilai1 - nilai2 - nilai3;
                        output2.setText(kurang + " ");
                    }
                }if (checkBox1.isChecked() && !checkBox2.isChecked() && !checkBox3.isChecked()){
                    output2.setText("Error");
                }if (!checkBox1.isChecked() && checkBox2.isChecked() && !checkBox3.isChecked()){
                    output2.setText("Error");
                }if (!checkBox1.isChecked() && !checkBox2.isChecked() && checkBox3.isChecked()){
                    output2.setText("Error");
                }
            }
        });

        kali.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                if(checkBox1.isChecked() && checkBox2.isChecked() && !checkBox3.isChecked()){
                    if (!TextUtils.isEmpty(input1.getText().toString()) &&!TextUtils.isEmpty(input2.getText().toString())) {
                        int nilai1 = Integer.parseInt(input1.getText().toString());
                        int nilai2 = Integer.parseInt(input2.getText().toString());
                        int kali = nilai1 * nilai2;
                        output2.setText(kali + " ");
                    }
                }
                if(checkBox1.isChecked() && !checkBox2.isChecked() && checkBox3.isChecked()){
                    if (!TextUtils.isEmpty(input1.getText().toString()) &&!TextUtils.isEmpty(input3.getText().toString())) {
                        int nilai1 = Integer.parseInt(input1.getText().toString());
                        int nilai3 = Integer.parseInt(input3.getText().toString());
                        int kali = nilai1 * nilai3;
                        output2.setText(kali + " ");
                    }
                }
                if(!checkBox1.isChecked() && checkBox2.isChecked() && checkBox3.isChecked()){
                    if (!TextUtils.isEmpty(input2.getText().toString()) &&!TextUtils.isEmpty(input3.getText().toString())) {
                        int nilai2 = Integer.parseInt(input2.getText().toString());
                        int nilai3 = Integer.parseInt(input3.getText().toString());
                        int kali = nilai2 * nilai3;
                        output2.setText(kali + " ");
                    }
                }
                if(checkBox1.isChecked() && checkBox2.isChecked() && checkBox3.isChecked()){
                    if (!TextUtils.isEmpty(input1.getText().toString()) &&!TextUtils.isEmpty(input2.getText().toString()) && !TextUtils.isEmpty(input3.getText().toString())){
                        int nilai1 = Integer.parseInt(input1.getText().toString());
                        int nilai2 = Integer.parseInt(input2.getText().toString());
                        int nilai3 = Integer.parseInt(input3.getText().toString());
                        int kali = nilai1 * nilai2 * nilai3;
                        output2.setText(kali + " ");
                    }
                }if (checkBox1.isChecked() && !checkBox2.isChecked() && !checkBox3.isChecked()){
                    output2.setText("Error");
                }if (!checkBox1.isChecked() && checkBox2.isChecked() && !checkBox3.isChecked()){
                    output2.setText("Error");
                }if (!checkBox1.isChecked() && !checkBox2.isChecked() && checkBox3.isChecked()){
                    output2.setText("Error");
                }
            }
        });

        bagi.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                if(checkBox1.isChecked() && checkBox2.isChecked() && !checkBox3.isChecked()){
                    if (!TextUtils.isEmpty(input1.getText().toString()) &&!TextUtils.isEmpty(input2.getText().toString())) {
                        int nilai1 = Integer.parseInt(input1.getText().toString());
                        int nilai2 = Integer.parseInt(input2.getText().toString());
                        int bagi = nilai1 / nilai2;
                        output2.setText(bagi + " ");
                    }
                }
                if(checkBox1.isChecked() && !checkBox2.isChecked() && checkBox3.isChecked()){
                    if (!TextUtils.isEmpty(input1.getText().toString()) &&!TextUtils.isEmpty(input3.getText().toString())) {
                        int nilai1 = Integer.parseInt(input1.getText().toString());
                        int nilai3 = Integer.parseInt(input3.getText().toString());
                        int bagi = nilai1 / nilai3;
                        output2.setText(bagi + " ");
                    }
                }
                if(!checkBox1.isChecked() && checkBox2.isChecked() && checkBox3.isChecked()){
                    if (!TextUtils.isEmpty(input2.getText().toString()) &&!TextUtils.isEmpty(input3.getText().toString())) {
                        int nilai2 = Integer.parseInt(input2.getText().toString());
                        int nilai3 = Integer.parseInt(input3.getText().toString());
                        int bagi = nilai2 / nilai3;
                        output2.setText(bagi + " ");
                    }
                }
                if(checkBox1.isChecked() && checkBox2.isChecked() && checkBox3.isChecked()){
                    if (!TextUtils.isEmpty(input1.getText().toString()) &&!TextUtils.isEmpty(input2.getText().toString()) && !TextUtils.isEmpty(input3.getText().toString())){
                        int nilai1 = Integer.parseInt(input1.getText().toString());
                        int nilai2 = Integer.parseInt(input2.getText().toString());
                        int nilai3 = Integer.parseInt(input3.getText().toString());
                        int bagi = nilai1 / nilai2 / nilai3;
                        output2.setText(bagi + " ");
                    }
                }if (checkBox1.isChecked() && !checkBox2.isChecked() && !checkBox3.isChecked()){
                    output2.setText("Error");
                }if (!checkBox1.isChecked() && checkBox2.isChecked() && !checkBox3.isChecked()){
                    output2.setText("Error");
                }if (!checkBox1.isChecked() && !checkBox2.isChecked() && checkBox3.isChecked()){
                    output2.setText("Error");
                }
            }
        });

    }
}
