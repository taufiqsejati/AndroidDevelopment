package com.kpuls.project.sejati.projectblk.BelajarIntent;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import com.kpuls.project.sejati.projectblk.R;

public class BelajarIntent2 extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_belajar_intent2);
        Button ke3=findViewById(R.id.btn_ketiga_2);
        ke3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent ke3= new Intent(BelajarIntent2.this, BelajarIntent3.class);
                startActivity(ke3);
            }
        });
        Button ke1=findViewById(R.id.btn_kesatu_2);
        ke1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent ke1= new Intent(BelajarIntent2.this, BelajarIntent.class);
                startActivity(ke1);
            }
        });
    }
}
