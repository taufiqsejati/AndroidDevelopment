package com.kpuls.project.sejati.projectblk.KalkulatorSaya;

import android.support.v7.app.ActionBar;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.Toolbar;
import android.text.TextUtils;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import com.kpuls.project.sejati.projectblk.R;

public class KalkulatorSaya extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_kalkulator_saya);
        Button tambah=findViewById(R.id.tambah);
        Button kurang=findViewById(R.id.kurang);
        Button kali=findViewById(R.id.kali);
        Button bagi=findViewById(R.id.bagi);

        final EditText data1=findViewById(R.id.editText1);
        final EditText data2=findViewById(R.id.editText2);
        final TextView data3=findViewById(R.id.editText3);

        tambah.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if (!TextUtils.isEmpty(data1.getText().toString()) &&!TextUtils.isEmpty(data2.getText().toString())) {
                    int nilai1 = Integer.parseInt(data1.getText().toString());
                    int nilai2 = Integer.parseInt(data2.getText().toString());
                    int tambah = nilai1 + nilai2;
                    data3.setText(tambah + " ");
                }
                 }
        });
        kurang.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if (!TextUtils.isEmpty(data1.getText().toString()) &&!TextUtils.isEmpty(data2.getText().toString())) {

                    int nilai1= Integer.parseInt(data1.getText().toString());
                int nilai2=Integer.parseInt(data2.getText().toString());
                int kurang=nilai1-nilai2;
                data3.setText(kurang+" ");
            }}
        });
        kali.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if (!TextUtils.isEmpty(data1.getText().toString()) &&!TextUtils.isEmpty(data2.getText().toString())) {

                    int nilai1= Integer.parseInt(data1.getText().toString());
                int nilai2=Integer.parseInt(data2.getText().toString());
                int kali=nilai1*nilai2;
                data3.setText(kali+" ");
            }}
        });
        bagi.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if (!TextUtils.isEmpty(data1.getText().toString()) &&!TextUtils.isEmpty(data2.getText().toString())) {

                    int nilai1= Integer.parseInt(data1.getText().toString());
                int nilai2=Integer.parseInt(data2.getText().toString());
                int bagi=nilai1/nilai2;
                data3.setText(bagi+" ");
            }}
        });
        setToolbar();
    }
    private void setToolbar() {
        Toolbar toolbar =  findViewById(R.id.toolbar);
        //setSupportActionBar(toolbar);
        final ActionBar ab = getSupportActionBar();
        ab.setDisplayHomeAsUpEnabled(true);
        ab.setTitle("Kalkulator Saya");
    }
    @Override
    public boolean onOptionsItemSelected(MenuItem item) {

        switch (item.getItemId()){
            case android.R.id.home :
                finish();
                break;
        }

        return true;
    }
}
