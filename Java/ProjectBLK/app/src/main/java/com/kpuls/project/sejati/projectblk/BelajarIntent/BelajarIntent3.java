package com.kpuls.project.sejati.projectblk.BelajarIntent;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import com.kpuls.project.sejati.projectblk.R;

public class BelajarIntent3 extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_belajar_intent3);
        Button ke1= findViewById(R.id.btn_kesatu_3);
        ke1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent ke1=new Intent(BelajarIntent3.this, BelajarIntent.class);
                startActivity(ke1);
            }
        });
        Button ke2= findViewById(R.id.btn_kedua_3);
        ke2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent ke2=new Intent(BelajarIntent3.this, BelajarIntent2.class);
                startActivity(ke2);
            }
        });

    }
}
